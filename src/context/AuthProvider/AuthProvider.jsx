import React, { Children, createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';


const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({Children}) => {
    const user = null;

    const authInfo = {
        user,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;