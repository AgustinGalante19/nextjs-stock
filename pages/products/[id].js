import { useContext } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import { userContext } from '../../context/User/UserContext';

const Product = ({ product }) => {

    const router = useRouter();
    const { user } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const model = e.target.model.value;
        const quantity = e.target.quantity.value;
        //http://localhost:5000/api/products/stock
        axios.put(`${process.env.NEXT_PUBLIC_GET_STOCK}/${product._id}`,
            {
                name, brand, model, quantity,
            }).then(() => {
                router.push("/products")
            })
    }

    return (
        !user ? (
            <h1>loading...</h1>
        ) : (
            <Layout>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col form-product" >
                            <form onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="name"
                                        aria-describedby="emailHelp" required defaultValue={product.name} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Brand</label>
                                    <input type="text" className="form-control" name="brand" placeholder="brand" autoComplete="on"
                                        required defaultValue={product.brand} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Model</label>
                                    <input type="text" className="form-control" name="model" placeholder="model" autoComplete="on"
                                        required defaultValue={product.model} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quantity</label>
                                    <input type="text" className="form-control" name="quantity" placeholder="1" autoComplete="on"
                                        required defaultValue={product.quantity} />
                                </div>
                                <button type="submit" className="btn btn-modify" >Modify</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    )
}

export default Product;


export async function getServerSideProps(context) {

    const { id } = context.params;
    const cookies = context.req.headers.cookie;
    if (cookies) {
        const res = await fetch(process.env.NEXT_PUBLIC_GET_STOCK + "/" + id);
        const product = await res.json();
        return {
            props: {
                product: product,
            }
        }
    }

    return {
        props: {
            product: null,
        }
    }
}