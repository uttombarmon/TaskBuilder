import manage from './manage.png'

const Manage = () => {
    return (
        <div className=' w-full flex flex-wrap h-fit md:h-[500px]'>
            <div className=' self-center w-full my-10 px-4 md:w-2/4 text-center font-semibold'>
                <p className=' text-2xl md:text-4xl font-extrabold my-3'>Manage Weekly</p>
                <p>Navigate your weekly goals effortlessly with intuitive task management. TaskForge Weekly Edition empowers you to streamline, prioritize, and conquer tasks, ensuring a productive week. Craft success with precision using WeekCraft Pro and synchronize your journey with WeeklyTaskSync. Your weekly productivity journey begins here.</p>
            </div>
            <div className=' w-full md:w-2/4'>
                <img className='h-[300px] w-full md:h-[500px]' src={manage} alt="" />
            </div>
        </div>
    );
};

export default Manage;