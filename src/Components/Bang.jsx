import { CiBookmark } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { Link } from "react-router-dom";
const Bang = ({ category }) => {
    const { author, title, image_url ,details} = category
    return (
        <div>
            <div className="card rounded-[5px] shadow-sm">
                <div className="bg-[#F3F3F3] justify-between  flex ">
                    <div className="flex">
                        <div className="p-4">
                            <img className="rounded-full w-12 h-12" src={author.img} alt="" />
                        </div>
                        <div className="mt-3">
                            <h1 className="font-bold">{author.name}</h1>
                            <p>{author.published_date}</p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-5 mr-5">
                        <CiBookmark className="w-7 h-7" />
                        <IoShareSocial className="w-7 h-7" />
                    </div>

                </div>

                <div className="p-5">
                    <h1 className="font-bold p-5 text-[20px] md:text-[30px]">{title}</h1>
                    <figure>
                        <img className="rounded-none"
                            src={image_url} />
                    </figure><br />
                    <p>{details.slice(0,200)}...<Link className="underline">see more</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Bang;