import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import { UserContextWrapper } from '../context/User/UserContext';

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head>
                <title>Stock master</title>
            </Head>
            <CookiesProvider>
                <UserContextWrapper>
                    <Component {...pageProps} />
                </UserContextWrapper>
            </CookiesProvider>
        </>
    )
}
export default MyApp;
