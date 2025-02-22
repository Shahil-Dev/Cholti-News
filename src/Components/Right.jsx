import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Right = () => {
    return (
        <div>
            <h1 className="font-bold">Login with</h1>
            <div className="flex flex-col gap-2 mt-5">
                <div>
                    <button className="btn btn-outline w-full btn-primary"><span> <FaGoogle /></span>Login with Google</button>
                </div>
                <button className="btn btn-outline "><span><FaGithub />
                </span>Login in with github</button>
            </div>
            <br />
            <div>
                <h1 className="font-bold">Find Us On</h1>
                <br />
                <div className="flex flex-col gap-2">
                    <button className="btn btn-outline"><span><FaFacebook></FaFacebook></span> Facebook</button>
                    <div className="btn btn-outline"><FaInstagram></FaInstagram>Instagram</div>
                    <button className="btn btn-outline"><FaTwitter></FaTwitter>Twitter</button>
                </div>
            </div>
            <div>
                <br />
                <h1 className="font-bold">Q-zone</h1>
            </div>
        </div>
    );
};

export default Right;