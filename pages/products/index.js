import { useState, useContext } from 'react'
import * as cookie from 'cookie';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Stock from '../../components/Stock';
import Custom404 from '../../pages/404';
import { userContext } from '../../context/User/UserContext';
import Loader from '../../components/Loader';

const stock = ({ products }) => {


    const { user } = useContext(userContext);

    const [element, setElement] = useState("");
    const [stock, setStock] = useState(products);
    const [fullstock, setFullstock] = useState(products);
    const handleChange = (e) => {
        setElement(e.target.value);
        filter(e.target.value);
    }

    const filter = (element) => {
        var result = products.filter(function (item) {
            if (item.name.toString().toLowerCase().includes(element.toLowerCase()) || item.brand.toString().toLowerCase().includes(element.toLowerCase()) || item.model.toString().toLowerCase().includes(element.toLowerCase())) {
                return item;
            }
        });
        setStock(result);
    }


    return (
        products && user ? (
            <Layout>
                <div className="container">
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
                        <button className="btn"></button>
                    </div>
                    <div style={{ overflowX: "auto" }}>
                        {console.log(fullstock.length)}
                        {

                            fullstock.length <= 0 ? (
                                <div className="text-center">
                                    <h3>You don't have any products loaded!</h3>
                                    <p style={{opacity: "50%"}}>Add a product clicking on + button!</p>
                                </div>

                            ) : (
                                stock.length > 0 ? (

                                    <Stock products={stock} />

                                ) : (
                                    <h3 className="text-center">Product not found.</h3>
                                )
                            )
                        }
                    </div>
                </div>
            </Layout>
        ) : (
            <Layout>
                <Loader />
            </Layout>
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
                    products: data.products
                }
            }
        } else {
            return {
                props: {
                    products: null
                }
            }
        }
    }
    return {
        props: {
            products: null
        }
    }
}
export default stock;