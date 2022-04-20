import { useContext } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AuthHeader from '../components/AuthHeader';
import { userContext } from '../context/User/UserContext';
import { useCookies } from 'react-cookie';
import Loader from '../components/Loader'

const index = () => {

    //TODO: use context in layout component, not in the rest of components and not require username as prop
    const { user } = useContext(userContext);
    const [cookie, setCookie] = useCookies(["user"]);
    return (
        <Layout>
            {
                !user && cookie.user ? (
                    <Loader />
                ) : user && cookie.user ? (
                    <AuthHeader username={user.name} />
                ) : !user && !cookie.user ? (
                    <Header />
                ) : ("")
            }
        </Layout>
    )
}

export default index;