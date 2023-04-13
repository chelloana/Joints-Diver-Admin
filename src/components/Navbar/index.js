import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import contact from "../../assets/images/icons/contact.svg";
import logout from "../../assets/images/icons/logout.svg";
import posts from "../../assets/images/icons/post.svg";

const Navbar = () => {
    return (
        <>

            {/* Desktop and tablet mode */}

            <nav className="hidden md:sticky md:top-0 md:block">
                <div className="absolute top-0 w-full bg-white py-2 shadow-box">
                    <div className="container flex items-center justify-between">
                        <NavLink to="/">
                            <img src={logo} width="70px" alt="Logo" />
                        </NavLink>
                        <ul className="flex gap-6">
                            <li>
                                <NavLink exact to="/stories" className="font-medium tracking-wide" activeClassName="active">
                                    Stories
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="font-medium tracking-wide" activeClassName="active">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="font-medium tracking-wide" activeClassName="active">
                                    LogOut
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile mode */}
            <nav className="fixed bottom-0 w-full overflow-hidden bg-white py-3 shadow-menu md:hidden">
                <div className="container grid grid-cols-3">
                    <NavLink to="/stories" className="flex flex-col items-center justify-center">
                        <img src={posts} width="20px" alt="" />
                        <p className="mt-1 text-xs">Stories</p>
                    </NavLink>
                    <NavLink to="/contact" className="flex flex-col items-center justify-center">
                        <img src={contact} width="20px" alt="" />
                        <p className="mt-1 text-xs">Contact</p>
                    </NavLink>
                    <NavLink to="/" className="flex flex-col items-center justify-center">
                        <img src={logout} width="20px" alt="" />
                        <p className="mt-1 text-xs">Logout</p>
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
