import { Link } from 'react-router-dom';
import banner from './banner.png'

const Banner = () => {
    return (
        <div className=' w-full flex flex-wrap bg-slate-50'>
            <div data-aos="zoom-in-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className='w-2/4 flex justify-center'>
                <div className=' self-center w-3/4 mx-auto'>
                    <div className=' mb-2 md:mb-6'>
                        <p className=' text-xl md:text-5xl my-2 font-extrabold'>Your All-in-One Task Solution</p>
                        <p className=' text-base md:text-xl font-bold'>Task<span className=" text-orange-500">Builder</span> Seamless, Intuitive, Powerfull!</p>
                    </div>
                    <Link to={'/dashboard/todo'} className='btn underline btn-primary'>Let`s Explore</Link>
                </div>
            </div>
            <div data-aos="zoom-in-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className=' h-[300px] md:h-[600px] w-2/4'>
                <img className=' h-full w-full' src={banner} alt="" />
            </div>
        </div >
    );
};

export default Banner;