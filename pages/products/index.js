import * as cookie from 'cookie';
import Link from 'next/link';

import Layout from '../../components/Layout';
import Stock from '../../components/Stock';
import Custom404 from '../../pages/404';


const stock = ({ data }) => {

    return (
        data ? (
            <Layout username={data.username}>
                <div className="container-fluid" style={{ marginTop: "5vh" }}>
                    <Link href="/addproduct">
                        <a className="btn btn-modify" style={{ marginBottom: "1vh" }}>+</a>
                    </Link>
                    {
                        !data.products ? (
                            <h4>loading...</h4>
                        ) : (
                            data.products.length > 0 ? (

                                <Stock products={data.products} />

                            ) : (
                                <h1>no products :/</h1>
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
        console.log()
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