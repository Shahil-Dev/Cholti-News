import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const Registration = () => {
    const { signUp , setUser} = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const fullname = form.fullname.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, fullname, photoURL);
        signUp(email, password)
            .then((result) => {
                setUser(result)
            })
            .catch(error =>{
                console.log(error);
              })
    };

    return (
        <div className="bg-[#E7E7E7] min-h-screen">
            <div>
                <Navbar />
            </div>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <h1 className="font-bold text-3xl font-Dancing">Create Your Account</h1>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleSignUp} className="card-body">
                                <fieldset className="fieldset">
                                    <label htmlFor="fullname" className="fieldset-label">
                                        Fullname
                                    </label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        name="fullname"
                                        className="input"
                                        placeholder="Fullname"
                                    />
                                    <label htmlFor="photoURL" className="fieldset-label">
                                        Photo URL
                                    </label>
                                    <input
                                        type="text"
                                        id="photoURL"
                                        name="photoURL"
                                        className="input"
                                        placeholder="Photo URL"
                                    />
                                    <label htmlFor="email" className="fieldset-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="input"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="password" className="fieldset-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="input"
                                        placeholder="Password"
                                    />
                                    <div>
                                        <a className="link link-hover">Forgot password?</a>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Sign Up</button>
                                </fieldset>
                                <h1 className="font-bold text-[#706F6F]">
                                    Don’t Have An Account?{" "}
                                    <NavLink to="/login" className="text-orange-600">
                                        Login
                                    </NavLink>
                                </h1>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;