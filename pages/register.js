import axios from 'axios';
import Link from 'next/link'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Custom404 from './404';


const register = ({ user }) => {

  const [cookie, setCookie] = useCookies(["user"]);
  const router = useRouter();

  const handleSignUp = async (e) => {

    e.preventDefault();
    //todo: validar datos
    const name = e.target.name.value;
    const lastname = e.target.lastname.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const email = e.target.email.value;

    try {
      axios.post(process.env.NEXT_PUBLIC_REGISTER,
        {
          name,
          lastname,
          username,
          email,
          password
        })
        .then(response => {
          setCookie("user", response.data.token, {
            path: "/",
            maxAge: 3600 * 24 * 7,
            sameSite: true
          });
          router.push("/");
        });
    } catch (e) {
      console.log(e);
      router.push("/404");
    }
  }

  return (
    !user ? (
      <Layout>
        <div className="container form-container">
          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Lastname</label>
              <input type="text" className="form-control" id="lastname" name="lastname" placeholder="lastname" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Username</label>
              <input type="text" className="form-control" id="username" name="username" placeholder="username"
                aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Email</label>
              <input type="text" className="form-control" id="email" name="email" placeholder="email"
                aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="password"
                autoComplete="on" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm password</label>
              <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="confirm password" required />
            </div>
            <button type="submit" className="btn btn-modify">Register</button>
            <Link href="/login">
              <a style={{ display: 'block' }}>Do you already have an account?</a>
            </Link>
          </form>
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

export default register;