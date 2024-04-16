import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {

    // const userInfo = useContext(AuthContext)
    // console.log(userInfo);


    const {loginUser, googleLogin, setUser, user} = useContext(AuthContext)
    // console.log(registerUser);
    const location = useLocation()
    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        loginUser(email,password)
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => setUser(result.user))
    }
    

    useEffect(()=>{
        if(user){
            navigate(location.state)

        }
    },[user])


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
                        <div className="flex justify-evenly m-9">
                        <button onClick={handleGoogleLogin} className="btn btn-primary">Google Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;