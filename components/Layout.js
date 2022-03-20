import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useCookies } from 'react-cookie';

import Navbar from './Navbar';
import AuthNavbar from './AuthNavbar';
import Footer from './Footer';

const Layout = ({ children, username }) => {


  const [authent, setAutent] = useState(false);
  //! Set the value of cookie 'user' with value of the token received from the api.
  const [cookie, setCookie] = useCookies(["user"]);

  const router = useRouter();

  useEffect(() => {

    const handleRouteChange = () => {
      NProgress.start();
    }
    if (cookie.user) {
      setAutent(true);
    } else {
      setAutent(false);
    }

    router.events.on("routeChangeStart", handleRouteChange);


    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    }
  }, []);


  return (
    <div className="page-container">
      <div className="content-wrap">
        {
          authent ? (
            <AuthNavbar username={username} />
          ) : (
            <Navbar />
          )
        }
        <main className="container-fluid">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;