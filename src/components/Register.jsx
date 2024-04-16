import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {

    // const authInfo = useContext(AuthContext)
    // console.log(authInfo.registerUser);

    const {registerUser, setUser} = useContext(AuthContext)
    // console.log(authInfo.registerUser);
    const [error, setError] = useState('')



    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        // console.log(name, email, photo, password);

        if(password.length < 6){
            setError('Password must be at least 6 characters')
            console.log(error);
            return
        }

        if(!/^(?=.*[A-Z])/.test(password)){
            setError('Password must have an uppercase letter')
            return
        }

        if(!/^(?=.*[a-z])/.test(password)){
            setError('Password must have an lowercase letter')
            return
        }


        setError('')
        registerUser(email, password)
        .then(result=>{setUser(result.user)})
        .catch(error=>setError(error.message))
    }



    return (
        <div>
            <Helmet>
                <title>Dwellics | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Create your Dwellics account to access a world of residential real estate opportunities tailored to your preferences and needs.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo link" className="input input-bordered"/>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                error && <small className="text-red-500">{error}</small>
                            }

                            <p>
                                Already registered? Please <Link to={'/login'}>
                                    <button className="btn  btn-link">Login</button>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;