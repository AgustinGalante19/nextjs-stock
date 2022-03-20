import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function custom404() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar />
                <div style={{ textAlign: 'center' }}>
                    <Image src="/c404.png" alt="404" width="600" height="600" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default custom404;