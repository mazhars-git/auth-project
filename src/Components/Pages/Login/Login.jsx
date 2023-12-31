import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const { signIn } = useContext(AuthContext);
    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(auth, email, password)
        .then(result => {
            console.log(result)
            const loggedInUser = result.loggedInUser;
            console.log(loggedInUser);
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    };

    const handleGoogleLogin = () => {
        
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
        })
        .catch(error =>{
            console.log('Error:', error.message);
        })
    };


    return (
        <div className="max-w-md m-auto min-h-screen">
            <div className="">
                <div className="text-center pb-5">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>

                <div className="card w-full max-w-lm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label mb-2 font-semibold">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label mb-2 font-semibold">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            
                            <label className="label mt-2 font-semibold">
                                <a href="#" className="label-text-alt link link-hover">Not Registered? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    
                        <span className='text-3xl font-semibold text-center'>Or,</span>

                        <div className="card-body form-control">
                            <button onClick={handleGoogleLogin} className="btn btn-warning">Login With Google</button>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Login;