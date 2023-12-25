import reminder from './reminder.png'

const Reminder = () => {
    return (
        <div className=' w-full flex flex-wrap-reverse h-fit bg-slate-50 md:h-[500px] my-2'>
            <div data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-duration="1000" className=' w-full md:w-2/4'>
                <img className='h-full' src={reminder} alt="" />
            </div>
            <div data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-duration="1000" className=' self-center w-full px-4 md:w-2/4 text-center font-semibold'>
                <p className=' text-2xl md:text-4xl font-extrabold my-3'>Smart Reminder</p>
                <p>Elevate productivity with intelligent reminders. Stay on track effortlessly as TaskWise&apos;s smart reminders adapt to your workflow, ensuring you never miss a beat in task management. Your personal productivity assistant, making each task a breeze.</p>
            </div>
        </div>
    );
};

export default Reminder;