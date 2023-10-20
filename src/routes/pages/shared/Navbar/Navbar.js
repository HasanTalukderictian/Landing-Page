import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../../assests/logo (2).png';

const Navbar = () => {

    const navItem = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link><li><a>About</a></li></Link>
       
    </>
    return (
        <div className="navbar bg-base-600 navbar fixed z-10 bg-opacity-20 bg-[#07332F] text-white max-w-screen-xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <img className='w-[60px]' src={icon} alt="" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Doc House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;