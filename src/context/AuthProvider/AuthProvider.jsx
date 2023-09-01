import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';



const auth = getAuth(app);

const AuthProvider = () => {

    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;