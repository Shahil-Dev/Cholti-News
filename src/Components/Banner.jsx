import moment from "moment";
import Marquee from "react-fast-marquee";
const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="font-Dancing text-center text-[60px] font-bold">Cholti News</h1>
            <p className="text-center text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="text-center mt-3"> {moment().format("dddd, MMMM Do YYYY")}</p>
            <div className="bg-[#F3F3F3] flex p-2  mt-4 max-w-6xl">
                <div className="px-6 py-2 md:border-r-7 md:border-[#F3F3F3] bg-[#D72050]">Latest</div>
                <div className="mt-1.5"><Marquee className="">
                    I can be a React component, multiple React components, or just some text.
                </Marquee></div>
            </div>
        </div>
    );
};

export default Banner;