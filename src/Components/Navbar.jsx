import { NavLink } from "react-router-dom";
import "../App.css"
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const Navbar = () => {
    const {user , logOut} = useContext(AuthContext)

    
    return (
        <div>
            <div className="  bg-base-100 shadow-sm">
                <div className="navbar max-w-6xl mx-auto">
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink className={({ isActive }) => `text-black font-extrabold ${isActive ? "border-2 border-black" : "text-[#000000]"}`} to="/">Home</NavLink></li>
                                <li>
                                    <NavLink className={({ isActive }) => `text-black font-extrabold ${isActive ? "border-2 border-black" : "text-[#000000]"}`}to="/About">About </NavLink>
                                </li>
                                <li><NavLink className={({ isActive }) => `text-black font-extrabold ${isActive ? "border-2 border-black" : "text-[#000000]"}`} to="/Career">Career</NavLink></li>
                        </ul>
                    </div>
                    <div className="flex-1 navbar-center ml-20">
                        <a to="/" className="btn md:hidden inline btn-ghost text-xl font-Dancing">Cholti News</a>
                    </div>
                    <div className="mr-4">
                        <div className="navbar-center hidden gap-5 lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><NavLink className={({ isActive }) => `text-black font-extrabold ${isActive ? "border-2 border-black" : "text-[#000000]"}`} to="/">Home</NavLink></li>
                                <li>
                                    <NavLink className={({ isActive }) => `text-black font-extrabold ${isActive ? "border-2 border-black" : "text-[#000000]"}`}to="/About">About </NavLink>
                                </li>
                                <li><NavLink className={({ isActive }) => `text-black font-extrabold ${isActive ? "border-2 border-black" : "text-[#000000]"}`} to="/Career">Career</NavLink></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-2">
                       <div>
                         {
                            user && user.email ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <div><h1>{user && user.email} </h1></div>
                                <button className="btn btn-warning" onClick={logOut}>Logout</button>
                            </ul>
                        </div> : <div><NavLink to="/login" className="btn btn-neutral rounded-none">Login</NavLink></div>
                         }
                        </div>
                       </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;




<section className='divider divider-secondary'></section>
