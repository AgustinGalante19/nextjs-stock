import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import { UserProvider } from '../context/userContext'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Stock master</title>
                <meta name="description" content="Stock master, a web site to storage yout stock products."></meta>
            </Head>
            <CookiesProvider>
                <UserProvider>
                    <Component {...pageProps} />
                </UserProvider>
            </CookiesProvider>
        </>
    )
}
export default MyApp;