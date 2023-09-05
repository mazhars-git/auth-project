import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const {user, setUser} = useState(null);
    const {loading, setLoading } = useState(true);

    // const userWithGoogle = (auth, provider) => {
    //     return new GoogleAuthProvider(auth, provider);
    // }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        createUser,
        signIn, 
        loading,      
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;