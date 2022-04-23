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
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
