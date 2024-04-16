
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    // console.log(user.email);

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'} >Home</NavLink></li>
                            <li><NavLink to={'/contact'} >Contact</NavLink></li>
                            {/* <li><a>Home</a></li> */}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl" href="/">Dwellics</a>
                    {/* <a className="btn btn-ghost text-xl">Dwellics</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {/* <li><a>Home</a></li> */}
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>

                        <li>

                            <NavLink to={'/contact'}>Contact</NavLink>
                        </li>
                        <li>

                            <NavLink to={'/exclusive'}>Exclusive</NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li>
                            <NavLink to={'/update-profile'}>Update Profile</NavLink>
                        </li>
                        {/* <li><a>User Profile</a></li> */}
                        {/* <li>
                            <NavLink to={'/login'}>Login</NavLink>
                        </li> */}
                        <li>
                            <NavLink to={'/register'}>Register</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={'/register'}>Logout</NavLink>
                        </li> */}
                    </ul>
                    {user ? 
                    <div>
                        {user.email}
                        <button onClick={()=>logOut()} className='btn btn-primary'>Logout</button>
                        
                    </div> : 
                    <ul>
                        <li><NavLink to={'/login'}>Login</NavLink></li>
                    </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;