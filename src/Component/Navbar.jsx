import { Link, NavLink } from "react-router";
const Navbar = () => {
    const link = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-orange-600 text-white ml-3 text-lg font-semibold" : "text-gray-700 text-lg hover:bg-orange-600 hover:text-lg hover:text-white ml-2 font-semibold"
        } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-orange-600 text-white ml-3 text-lg font-semibold" : "text-gray-700 text-lg hover:bg-orange-600 hover:text-lg hover:text-white ml-2 font-semibold"
        } to="/service">Service</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-orange-600 text-white ml-3 text-lg font-semibold" : "text-gray-700 text-lg hover:bg-orange-600 hover:text-lg hover:text-white ml-2 font-semibold"
        } to="/about">About</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-orange-600 text-white ml-3 text-lg font-semibold" : "text-gray-700 text-lg hover:bg-orange-600 hover:text-lg hover:text-white ml-2 font-semibold"
        } to="/vehicles">Vehicles</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-orange-600 text-white ml-3 text-lg font-semibold" : "text-gray-700 text-lg hover:bg-orange-600 hover:text-lg hover:text-white ml-2 font-semibold"
        } to="/contact">Contact</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-5 md:px-[100px] lg:px-[100px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
               <div className="flex-row md:flex lg:flex gap-3 text-3xl md:text-3xl lg:text-4xl font-bold ">
                <p><span className="text-orange-600">F</span>ast</p> 
                <p><span className="text-orange-600">চ</span>লা<span className="text-orange-600">চ</span>
                ল</p>
               </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                    <button className="btn-xs rounded-xl border-2 border-orange-600   font-semibold  hover:bg-orange-600 hover:text-white p-2 mr-3"><Link >Sign In</Link></button>
                    <button className="btn-xs rounded-xl border-2 border-orange-600  font-semibold  hover:bg-orange-600 hover:text-white p-2 mr-3"><Link >Sign Out</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;