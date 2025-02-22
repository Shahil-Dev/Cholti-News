import { Outlet } from "react-router-dom";

const Center = () => {
    return (
        <div>
            <h1 className="font-bold">All news</h1>
            <br />
            <Outlet></Outlet>
        </div>
    );
};

export default Center;