import { useState, useEffect } from 'react'
import * as cookie from 'cookie';
import Link from 'next/link';

import Layout from '../../components/Layout';
import Stock from '../../components/Stock';
import Custom404 from '../../pages/404';

const stock = ({ data }) => {


    const [element, setElement] = useState("");
    const [stock, setStock] = useState(data.products);
    const handleChange = (e) => {
        setElement(e.target.value);
        filter(e.target.value);
    }

    const filter = (element) => {
        var result = data.products.filter(function (item) {
            if (item.name.toString().toLowerCase().includes(element.toLowerCase()) || item.brand.toString().toLowerCase().includes(element.toLowerCase()) || item.model.toString().toLowerCase().includes(element.toLowerCase())) {
                return item;
            }
        });
        setStock(result);
    }


    return (
        data.products ? (
            <Layout username={data.name}>
                <div className='py-2'>
                    <Link href="/addproduct">
                        <a className="btn btn-modify" style={{ marginBottom: "1vh" }}>+</a>
                    </Link>
                </div>
                <div className="py-2">
                    <input
                        className='form-control'
                        placeholder='Search product by name, brand or model'
                        value={element}
                        onChange={handleChange}
                    />
                    <button className="btn "></button>
                </div>
                <div style={{ overflowX: "auto" }}>
                    {
                        !stock ? (
                            <p className="text-center">no products :p</p>
                        ) : (
                            stock.length > 0 ? (

                                <Stock products={stock} />

                            ) : (
                                <h1 className="text-center">product not found :/</h1>
                            )
                        )
                    }
                </div>
            </Layout>
        ) : (
            <Custom404 />
        )
    )
}

export async function getServerSideProps(context) {

    const cookies = context.req.headers.cookie;
    if (cookies) {
        const { user } = cookie.parse(cookies);

        const res = await fetch(process.env.NEXT_PUBLIC_GET_STOCK, {
            headers: {
                "auth-token": user
            }
        });

        if (res.status == 200) {
            const data = await res.json();
            return {
                props: {
                    data
                }
            }
        } else {
            return {
                props: {
                    data: null
                }
            }
        }
    }
    return {
        props: {
            data: null
        }
    }
}
export default stock;