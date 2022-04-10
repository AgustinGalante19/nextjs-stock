import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'

const PorifleCard = (props) => {
    const [cookie, setCookie, removeCookie] = useCookies(["user"]);
    const router = useRouter();
    const handleLogout = e => {
        e.preventDefault();
        removeCookie("user", { path: "/" });
        window.location.href = "/";
    }
    return (
        <div className="contenedor">
            <div className="row">
                <div className="col-10 profile-container py-4">
                    <p className="profile-text-header" style={{ display: "inline-block" }}>Name</p>
                    <p>{props.name}</p>
                    <hr />
                    <p className="profile-text-header">Last name</p>
                    <p>{props.lastname}</p>
                    <hr />
                    <p className="profile-text-header">Username</p>
                    <p>{props.username}</p>
                    <hr />
                    <p className="profile-text-header">Email</p>
                    <p>{props.email}</p>
                    <hr />
                    <p className="profile-text-header">Description</p>
                    <p>soon...</p>
                </div>
                <div className="col-md-auto">
                    <div className="btn-container py-4" >
                        <a className='btn btn-modify' style={{ marginLeft: "auto" }}>Edit profile</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-modify" onClick={handleLogout}>Logout</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PorifleCard


{/* <a className='btn btn-modify profile-btn'>Edit profile</a> */ }

/* <div className="col-10 contenedor-profile py-4">
                    <p className="profile-text-header" style={{ display: "inline-block" }}>Name</p>
                    <p className="profile-text">{props.name}</p>
                    <hr />
                    <p className="profile-text-header">Last name</p>
                    <p className="profile-text">{props.lastname}</p>
                    <hr />
                    <p className="profile-text-header">Username</p>
                    <p className="profile-text">{props.username}</p>
                    <hr />
                    <p className="profile-text-header">Email</p>
                    <p className="profile-text">{props.email}</p>
                    <hr />
                    <p className="profile-text-header">Description</p>
                    <p>soon...</p>
                </div> */