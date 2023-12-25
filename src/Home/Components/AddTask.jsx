import addtask from './create.png'

const AddTask = () => {
    return (
        <div className=' w-full flex flex-wrap h-fit md:h-[500px]'>
            <div data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-duration="1000" className=' self-center w-full my-10 md:w-2/4 px-4 text-center font-semibold'>
                <p className=' text-2xl md:text-4xl font-extrabold my-3'>Add Task Easily</p>
                <p>Seamlessly add tasks with efficiency and ease. Experience instant integration with QuickAdd Pro, simplifying the task creation process for maximum productivity. SwiftTask—your go-to solution for swift and stress-free task addition, making productivity a breeze</p>
            </div>
            <div data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-duration="1000" className=' w-full md:w-2/4'>
                <img className='h-[300px] w-full md:h-[500px]' src={addtask} alt="" />
            </div>
        </div>
    );
};

export default AddTask;