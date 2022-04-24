import { useContext } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AuthHeader from '../components/AuthHeader';
import { userContext } from '../context/User/UserContext';
import { useCookies } from 'react-cookie';
import Loader from '../components/Loader'
import Articles from '../components/Articles'

const index = () => {
    const { user } = useContext(userContext);
    const [cookie, setCookie] = useCookies(["user"]);
    return (
        <Layout>
            {
                !user && cookie.user ? (
                    <Loader />
                ) : user && cookie.user ? (
                    <>
                        <AuthHeader username={user.name} />
                        <Articles />
                    </>
                ) : !user && !cookie.user ? (
                    <>
                        <Header />
                        <Articles />
                    </>
                ) : (
                    <h1>something bad happened</h1>
                )
            }
        </Layout>
    )
}

export default index;