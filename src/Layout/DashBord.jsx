import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { FaWallet, FaHome, FaCalendar, FaUtensils, FaBook, FaUser } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBord = () => {
    const [cart] = useCart();

    // to do..........................
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashbord/adminhome"><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to="/dashbord/additem"><FaUtensils />Add An Item</NavLink></li>
                            <li><NavLink to="/dashbord/manageitems"><FaWallet />Manage Items</NavLink></li>
                            <li><NavLink to="/"><FaBook />Manage Bookings(not implemented)</NavLink></li>
                            <li><NavLink to="/dashbord/allusers"><FaUser />All Users
                             </NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashbord/userhome"><FaHome />User Home</NavLink></li>
                            <li><NavLink to="/dashbord/reservation"><FaCalendar />Reservation</NavLink></li>
                            <li><NavLink to="/dashbord/history"><FaWallet />Payment History</NavLink></li>
                            <li><NavLink to="/dashbord/mycart"><FaShoppingCart />My cart
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </NavLink></li>
                        </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink to="/menu"><FaHome />Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaHome />Order Food</NavLink></li>
                </ul>
            </div>
        </div >
    );
};

export default DashBord;