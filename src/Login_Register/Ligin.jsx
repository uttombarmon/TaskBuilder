import { Link } from "react-router-dom";

const Ligin = () => {
    return (
        <div className="bg-base-200">
            <Link className="btn bg-slate-300 w-fit absolute top-3 mr-3 right-0">Register Now</Link>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-fit mx-auto lg:text-left">
                        <div className=" w-3/4 mx-auto">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Access your tasks with ease through our secure login feature on the task management website. Log in to organize, prioritize, and collaborate on your tasks effortlessly. Your personalized dashboard awaits, ensuring a seamless and efficient task management experience tailored to your needs.</p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                            <p className=" w-fit mx-auto font-semibold">Haven`t account? <Link to={'register'} className=" link link-hover underline">Register now!</Link></p>
                        </div>
                        <p className=" w-fit mx-auto text-xl font-extrabold">OR</p>
                        <div className="form-control w-2/4 mb-4 mx-auto">
                            <button className="btn bg-[#0F9D58] hover:text-[#0F9D58] text-2xl">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ligin;