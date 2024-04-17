

import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../components/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const UpdateProfile = ({ children }) => {
    console.log(children);
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return (
            <div>
                <Helmet>
                    <title>Dwellics | Profile</title>
                </Helmet>
                {children}
            </div>

        )

    }
    else {
        return (
            <div>
                <Helmet>
                    <title>Dwellics | Profile</title>
                </Helmet>
                <Navigate to={'/login'} state={location.pathname}></Navigate>
            </div>
        )

    }

};

export default UpdateProfile;