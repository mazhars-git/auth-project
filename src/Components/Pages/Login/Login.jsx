import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const handleLogin = (event) => {
        event.preventDefault();
    }


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
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label mb-2 font-semibold">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label mt-2 font-semibold">
                                <a href="#" className="label-text-alt link link-hover">Not Registered? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;