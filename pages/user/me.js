import { useUser } from '../../context/userContext'
import Layout from '../../components/Layout';

import Custom404 from '../404';
import ProfileCard from '../../components/PorifleCard';


const profile = () => {
    const { user } = useUser();
    return (
        user ? (
            <Layout username={user.username}>
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