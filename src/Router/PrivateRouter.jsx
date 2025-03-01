import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    if (user && user?.email) {
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRouter;