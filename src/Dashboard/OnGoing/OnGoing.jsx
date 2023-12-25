import { useEffect, useState } from "react";
import { axiosSecure } from "../../CustomHook/AxiosSecure";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const OnGoing = () => {
    const [tasks, setTask] = useState(null)
    useEffect(() => {
        axiosSecure.get('/ongoingtask')
            .then(e => {
                setTask(e.data)
                // console.log(e.data);
            })
            .catch(e => console.log(e))
    }, [])
    const deleteTask = (d) => {
        console.log(d);
        const id = d;
        axiosSecure.delete(`/deleteTask?id=${id}`)
            .then(e => {
                if (e.data.deletedCount > 0) {
                    toast.success("Task removed!")
                }
            })
            .catch(e => console.log(e.message))
    }
    return (
        <div className="w-[calc(100%-80px)] bg-slate-100 mx-auto px-5 rounded-md py-4">
            <div className="overflow-x-auto">

                {
                    tasks &&
                    tasks.map(d => {
                        return <li key={d._id} className=" flex justify-between w-full mx-auto px-5 my-3 shadow-sm bg-slate-200 py-2 rounded-md">
                            <Link className="ml-4 link link-hover self-center">{d.title.slice(0, 30)}...</Link>
                            <span className=" flex text-2xl">
                                <Link to={`edit/${d._id}`} className=" link link-hover mr-6"><FaRegEdit></FaRegEdit></Link>
                                <button onClick={() => deleteTask(d._id)}><MdDelete /></button>
                            </span>
                        </li>;
                    })
                }
            </div>

        </div>
    );
};

export default OnGoing;