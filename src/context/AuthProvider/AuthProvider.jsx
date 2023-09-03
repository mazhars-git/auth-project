import React, { Children, createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({Children}) => {
    const user = null;

    const provider = new GoogleAuthProvider();

    const createUser = createUserWithEmailAndPassword(auth, email, password);

    const authInfo = {
        auth,
        provider,
        user,
        createUser,
       

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;