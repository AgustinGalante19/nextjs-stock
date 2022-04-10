import { useContext } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AuthHeader from '../components/AuthHeader';
import { userContext } from '../context/User/UserContext';

const index = () => {

    //TODO: use context in layout component, not in the rest of components and not require username as prop
    const { user } = useContext(userContext);

    return (
        user ? (
            <Layout>
                <AuthHeader />
            </Layout>
        ) : (
            <Layout>
                <Header />
            </Layout>
        )
    )
}

export default index;

//* addproduct.js, index/home page x2, products/[id], products/index 