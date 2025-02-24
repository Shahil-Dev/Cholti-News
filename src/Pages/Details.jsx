import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FullDetails from "./FullDetails";

const Details = () => {
    const more = useLoaderData();
    const data = more.data[0]; // Access the first item in the `data` array
    const [book, setBook] = useState([]);

    console.log(data); // Log the data to verify its structure

    useEffect(() => {
        if (data) {
            setBook([data]); // Wrap `data` in an array to match the expected structure for `map`
        }
    }, [data]);

    return (
        <div>
            {book.length > 0 ? (
                book.map((math) => (
                    <FullDetails key={math._id} math={math}></FullDetails>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default Details;