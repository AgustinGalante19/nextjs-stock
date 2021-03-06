import { useContext, useState } from 'react'
import axios from 'axios';
import Layout from '../../components/Layout';
import { useCookies } from 'react-cookie';
import Router from 'next/router';
import { userContext } from '../../context/User/UserContext';
import productValidation from '../../services/validateProductForm';
import Loader from '../../components/Loader';

const addproduct = () => {

    const { user } = useContext(userContext);
    const [cookie, setCookie] = useCookies(["user"]);
    const [errorMessage, setErrorMessage] = useState(null);
    const handleSubmit = async (e) => {
        //get cookies from 'useCookies' method from react-cookie package.
        e.preventDefault();
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const model = e.target.model.value;
        const quantity = e.target.quantity.value;


        const result = await productValidation(name, model, brand, quantity);
        if (result.error) {
            setErrorMessage(result.error);
        } else {
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

    }

    return (

        <Layout>
            {!user ? (
                <Loader />
            ) : (
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col form-product">
                            <div className="col-sm-4 mx-auto">
                                {
                                    errorMessage ? (
                                        <div className="alert alert-danger" role="alert">
                                            <p className='text-center'>{errorMessage}</p>
                                        </div>
                                    ) : ""
                                }
                            </div>
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
            )
            }
        </Layout>
    )
}

export default addproduct;