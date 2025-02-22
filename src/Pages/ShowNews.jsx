import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Bang from "../Components/Bang";

const ShowNews = () => {
    const data = useLoaderData();
    const [core, setCore] = useState([]);

  
    console.log(data);

    useEffect(() => {
        if (data) {
           
            setCore(data.data || data);
        }
    }, [data]);

    return (
        <div>
           
            {core.length > 0 ? (
                <>
                    {/* <p>Total items: {core.length}</p> */}
                   
                   <div className="flex flex-col gap-5">
                   {core.map((category) => (
                        <Bang key={category.id} category={category} />
                    ))}
                   </div>
                </>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default ShowNews;