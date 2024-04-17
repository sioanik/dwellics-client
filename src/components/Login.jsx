import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('')

    // const userInfo = useContext(AuthContext)
    // console.log(userInfo);


    const { loginUser, googleLogin, setUser, user, githubLogin } = useContext(AuthContext)
    // console.log(registerUser);
    const location = useLocation()
    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        loginUser(email, password)
            .then(result => { console.log(result.user) })
            .catch(error => {
                console.log(error);
                setLoginError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => setUser(result.user))
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => setUser(result.user))
    }


    useEffect(() => {
        if (user) {
            navigate(location?.state ? location.state : '/')

        }
    }, [user])


    return (
        <div>
            <Helmet>
                <title>Dwellics | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Unlock exclusive features and personalized experiences by signing in to Dwellics, your gateway to finding the perfect home.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <p>
                                New here? Please <Link to={'/register'}>
                                    <button className="btn  btn-link">Register</button>
                                </Link>
                            </p>
                        </form>

                            {
                                loginError &&(
                                <div className="toast toast-top toast-end">
                                    <div className="bg-red-400 alert alert-info">
                                        <span className="text-white">{loginError}</span>
                                    </div>
                                </div>)
                            }
                            {
                                loginSuccess &&(
                                <div className="toast toast-top toast-end">
                                    <div className="bg-green-400 alert alert-info">
                                        <span className="text-white">{loginSuccess}</span>
                                    </div>
                                </div>)
                            }
                            <div className=" flex justify-evenly">
                                <div className="flex justify-evenly mb-6">
                                    <button onClick={handleGoogleLogin} className="btn btn-primary">Google</button>
                                </div>
                                <div className="flex justify-evenly mb-6">
                                    <button onClick={handleGithubLogin} className="btn btn-primary">Github</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
};

            export default Login;