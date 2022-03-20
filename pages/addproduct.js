import axios from 'axios';
import Layout from '../components/Layout';
import { useCookies } from 'react-cookie';
import Router from 'next/router'

const addproduct = () => {

    //get cookies from 'useCookies' method from react-cookie package.
    const [cookie, setCookie] = useCookies(["user"]);

    const token = cookie.user;


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const model = e.target.model.value;
        const quantity = e.target.quantity.value;

        axios.post(process.env.NEXT_PUBLIC_GET_STOCK, { name, brand, model, quantity }, {
            headers: {
                "auth-token": token
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
        <Layout>
            <div className="container form-modify">
                <div className="form-container form-signin">
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
        </Layout>
    )
}

export default addproduct;