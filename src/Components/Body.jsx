import Center from "./Center";
import Contain from "./Contain";
import Right from "./Right";

const Body = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='w-11/12 mx-auto pt-5 grid gap-3 md:grid-cols-12'>
                <aside className="left md:col-span-3">
                    <Contain />
                </aside>
                <section className="md:col-span-6">
                    <Center />
                </section>
                <aside className="md:col-span-3">
                    <Right />
                </aside>
            </div>
        </div>
    );
};

export default Body;