import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const Login = () => {
    const { logIn , setUser} = useContext(AuthContext)
    const loginUser = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        logIn(email, password)
            .then((result) => {
                // console.log(result);
                setUser(result);

            })
            .catch(error => {
                console.log(error);

            })
    }
    return (
        <div className="bg-[#E7E7E7] min-h-screen">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <h1 className="font-bold text-3xl font-Dancing">LogIn Your Account</h1>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={loginUser} className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <h1 className="font-bold text-[#706F6F]">Don’t Have An Account ?<Link
                                to="/registration" className="text-orange-600">Register</Link></h1>
                            <div>

                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;