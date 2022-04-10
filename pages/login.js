import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import Custom404 from './404';


const login = ({ user }) => {
    return (
        !user ? (
            <Layout>
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col form-user">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </Layout>
        ) : (
            <Custom404 />
        )
    )
}

export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    if (cookies) {
        return {
            props: {
                user: true
            }
        }
    }
    return {
        props: {
            user: null
        }
    }
}

export default login;