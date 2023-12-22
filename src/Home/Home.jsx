
import AddTask from "./Components/AddTask";
import Banner from "./Components/Banner";
import Manage from "./Components/Manage";
import Reminder from "./Components/Reminder";

const Home = () => {
    return (
        <div className=" overflow-x-hidden">

            {/* banner section  */}
            <Banner></Banner>
            {/* create task section  */}
            <AddTask></AddTask>
            {/* reminder section  */}
            <Reminder></Reminder>
            {/* manage task weekly */}
            <Manage></Manage>
        </div>
    );
};

export default Home;