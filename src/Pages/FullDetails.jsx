import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Right from "../Components/Right";
const FullDetails = ({ math }) => {
    const { image_url, title, details, category_id } = math
    return (
        <div>
            <Navbar></Navbar>
            <br />
            <div className="w-11/12 mx-auto  md:flex gap-3 md:grid-cols-12">
                <div className="left ">
                    <div className=" bg-base-100 lg:w-[800px] shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <Link to={`/news/${category_id}`} className="btn btn-primary"><FaArrowLeft /> Back to category</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 hidden md:block">
         <Right></Right>
                </div>
            </div>
        </div>
    );
};

export default FullDetails;