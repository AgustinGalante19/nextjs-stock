import { useContext } from 'react';
import Layout from '../../components/Layout';
import Custom404 from '../404';
import ProfileCard from '../../components/PorifleCard';
import { userContext } from '../../context/User/UserContext';

const profile = () => {

    const { user } = useContext(userContext);
    return (
        user ? (
            <Layout>
                {
                    !user ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="container">
                            <ProfileCard
                                name={user.name}
                                lastname={user.lastname}
                                username={user.username}
                                email={user.email}
                            />
                        </div>
                    )
                }
            </Layout>
        ) : (
            <Custom404 />
        )
    )
}

export default profile;