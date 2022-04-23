import { useContext } from 'react'
import axios from 'axios';
import Layout from '../../components/Layout';
import { useCookies } from 'react-cookie';
import Router from 'next/router';
import { userContext } from '../../context/User/UserContext';

const addproduct = () => {


    const { user } = useContext(userContext);
    const [cookie, setCookie] = useCookies(["user"]);
    const handleSubmit = (e) => {
        //get cookies from 'useCookies' method from react-cookie package.


        e.preventDefault();
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const model = e.target.model.value;
        const quantity = e.target.quantity.value;

        axios.post(process.env.NEXT_PUBLIC_GET_STOCK, { name, brand, model, quantity }, {
            headers: {
                "auth-token": cookie.user
            }
        })
            .then(() => {
                Router.push("/products");
            })
            .catch((err) => {
                console.log(err)
                Router.reload();
            });

    }

    return (
        !user ? (
            <h1>loading...</h1>
        ) : (
            <Layout>
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col form-product">
                            <form onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="name"
                                        aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Brand</label>
                                    <input type="text" className="form-control" name="brand" placeholder="brand" autoComplete="on"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Model</label>
                                    <input type="text" className="form-control" name="model" placeholder="model" autoComplete="on"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quantity</label>
                                    <input type="text" className="form-control" name="quantity" placeholder="1" autoComplete="on"
                                        required />
                                </div>
                                <button type="submit" className="btn btn-modify" >Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    )
}

export default addproduct;