import { NavLink } from "react-router-dom";
import loginImage from "../../assets/images/diverlogin.jpg";
import logo from "../../assets/images/logo.svg";

const Contact = () => {
    return (
        <center>
            <div className="container pb-12 pt-12">
                <div className="grid w-4/5 max-w-800 grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-white shadow-box">
                    <img src={loginImage} width="400px" alt="" />
                    <div className="px-20 py-20">
                        <center><img src={logo} width="100px" alt="Logo" /></center>
                        <form className="mt-6">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Username"
                                    className="mt-5 w-full rounded-lg bg-gray2 p-3 focus:outline-primary"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mt-5 w-full rounded-lg bg-gray2 p-3 focus:outline-primary"
                                />
                            </div>

                            <center>
                                <br></br>
                                <NavLink to="/stories" className="rounded-lg bg-primary px-4 py-2 font-medium tracking-wider text-white">
                                    Login
                                </NavLink>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </center>
    );
};

export default Contact;
