import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosSecure } from "../../CustomHook/AxiosSecure";

const DashCompo = () => {
    const [tasks, setTasks] = useState(null)
    const [write, setWrite] = useState(false)
    useEffect(() => {
        axiosSecure.get('/tasks')
    }, [])
    const onWriteable = () => {
        setWrite(true)
    }
    return (
        <div className=" w-full min-h-full">
            <div className=" w-[calc(100%-80px)] bg-slate-100 mx-auto px-5 rounded-md py-4">
                {!write ?
                    <p onClick={onWriteable}>Add task</p>
                    :
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="title.." className="input input-bordered w-2/4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        </div>
                    </form>
                }

            </div>
            <ul>
                <li className=" flex justify-between w-[calc(100%-40px)] md:w-[calc(100%-80px)] mx-auto px-5 my-3 shadow-sm bg-slate-100 py-2 rounded-md">
                    <div className=" flex">
                        <input type="checkbox" className="checkbox" />
                        <Link className="ml-4 link link-hover self-center">Task titles</Link>
                    </div>
                    <div className=" flex text-2xl">
                        <li className=" mr-6"><FaRegEdit></FaRegEdit></li>
                        <li><MdDelete /></li>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default DashCompo;