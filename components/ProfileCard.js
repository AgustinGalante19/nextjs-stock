import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'

const ProfileCard = (props) => {
    const [cookie, setCookie, removeCookie] = useCookies(["user"]);
    const router = useRouter();
    const handleLogout = e => {
        e.preventDefault();
        removeCookie("user", { path: "/" });
        router.push("/");
    }
    return (
        <div className="container">
            <div className="profile" style={{ maxWidth: "700px", margin: "auto" }}>
                <form action="/logout" method="post">
                    <div className="card-profile">
                        <div className="profile-header">
                            <h1 style={{ display: "inline-block" }}>
                                Profile
                            </h1>
                        </div>
                        <div className="profile-content">
                            {
                                !props.id ? (
                                    <p>Loading...</p>
                                ) : (
                                    <div>
                                        <h6>
                                            {props.id}
                                        </h6>

                                        <hr />
                                        <h6>
                                            {props.username}
                                        </h6>
                                        <hr />
                                        <h5>
                                            {props.email}
                                        </h5>
                                    </div>
                                )
                            }
                            <button className="btn btn-modify" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileCard;