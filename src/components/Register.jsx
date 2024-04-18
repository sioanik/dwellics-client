import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
{/* <FaEye /> */ }





// import { FaEyeSlash } from "react-icons/fa";
{/* <FaEyeSlash /> */ }

const Register = () => {

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm()
    
    //   const onSubmit = (data) => console.log(data)

    // const authInfo = useContext(AuthContext)
    // console.log(authInfo.registerUser);

    const { registerUser, setUser, user, updateUserProfile} = useContext(AuthContext)
    // console.log(authInfo.registerUser);
    const [error, setError] = useState('')
    // const [success, setSuccess] = useState('')

    const [showPass, setShowPass] = useState(false)



    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const image = e.target.photo.value
        const password = e.target.password.value
        console.log(name, email, image, password);

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            toast("Password must be at least 6 characters");
            console.log(error);
            return
        }

        if (!/^(?=.*[A-Z])/.test(password)) {
            setError('Password must have an uppercase letter')
            toast("Password must have an uppercase letter");
            return
        }

        if (!/^(?=.*[a-z])/.test(password)) {
            setError('Password must have an lowercase letter')
            toast("Password must have an lowercase letter");
            return
        }


        setError('')
        registerUser(email, password, name, image)
            .then(result => {
                // console.log(result.message);
                // setLoginSuccess('Logged in successfully')
                updateUserProfile(name, image)
                .then(()=>{
                    navigate('/update-profile')
                })
                setUser(result.user)
                toast("Successfully registered")
            })
            
            // (result => { setUser(result.user) 
            //     toast("Successfully registered")})
            
            .catch(error => {
                setError(error.message)
                toast("Something went wrong!")})
            
    }

    const location = useLocation()
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            navigate(location?.state ? location.state : '/update-profile')
        }
    }, [user])

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
                        {/* change 1 */}
                        <form onSubmit={handleRegister} className="card-body">
                        {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body"> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required 
                                // {...register("name", { required: true })}
                                />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required 
                                // {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo link" className="input input-bordered" 
                                // {...register("photo")}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="w-full relative">
                                    <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="w-full input input-bordered" required 
                                    // {...register("password", { required: true })}
                                    />

                                    <span className="absolute top-1/3 right-5" onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }</span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            {/* {
                                error && (
                                    <div className="toast toast-top toast-end">
                                        <div className="bg-red-400 alert alert-info">
                                            <span className="text-white">{error}</span>
                                        </div>
                                    </div>)
                            } */}

                            {/* {
                                error && <small className="text-red-500">{error}</small>
                            } */}

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