import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = (event) => {
        event.preventDefault();
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="">
                <div className="text-center pb-5">
                    <h1 className="text-4xl font-bold">Register now!</h1>
                </div>

                <div className="card w-full max-w-lm shadow-2xl bg-base-100">

                    <form onSubmit={() => handleSignUp()} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='firstName' placeholder="First Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Already Registered? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;