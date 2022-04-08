import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Stock master</title>
                <meta name="description" content="Stock master, a web site to storage yout stock products."></meta>
            </Head>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        </>
    )
}
export default MyApp;