import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
    }
    
    const menuItems = 
        <>
            <li className='font-semibold'><Link to='/'>Home</Link></li>
            <li className='font-semibold'><Link to='services'>Services</Link></li>
            {
                user ? 
                <>
                    <li onClick={handleLogout} className='font-semibold p-2 ml-2 hover:bg-gray-200 rounded-md'>Logout</li>
                </>
                :
                <li className='font-semibold'><Link to='login'>Login</Link></li>
            }
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">My Auth</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-white text-2xl font-bold rounded-full w-12">
                        <span>{user?.email.at(0)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;