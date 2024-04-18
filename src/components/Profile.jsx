
import { useContext } from 'react';
import { AuthContext } from './AuthProvider'
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const Profile = () => {

    const { user, updateUserProfile, setUser } = useContext(AuthContext)
    // console.log(user);
    console.log(user.email);
    console.log(user.displayName);
    console.log(user.photoURL);

    const handleUpdateUser = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.photo.value

        // updateUserProfile(name, image)
        
        // console.log(name, image);

        if (name && image){
            updateUserProfile(name, image)
            .then(result =>{
                setUser({...user,  displayName: name, photoURL: image});
            })
            toast("Profile Updated!")
            // console.log('1');
        }
        else if(name && !image){
            updateUserProfile(name, null)
            .then(result =>{
                setUser({...user,  displayName: name});
            })
            toast("Profile Updated!")
            // console.log('2');
        }
        else if(!name && image){
            updateUserProfile(null, image)
            .then(result =>{
                setUser({...user,  photoURL: image});
            })
            toast("Profile Updated!")
            // console.log('3');
        }
            

    }


    return (
        <div className='mx-auto'>
            <div className="w-2/3 max-w-[500px] flex-col md:flex-row mx-auto border-4 rounded-2xl border-primary mx-auto p-8 flex gap-2 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={user.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="pt-6 text-2xl font-semibold">{user.displayName}</h2>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            Email: 
                            <span className="dark:text-gray-600">{user.email}</span>
                        </span>

                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <div className="mx-auto card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* change 1 */}
                    <form onSubmit={handleUpdateUser} className="card-body">
                        {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body"> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered"
                            // {...register("name", { required: true })}
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


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
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

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Profile;