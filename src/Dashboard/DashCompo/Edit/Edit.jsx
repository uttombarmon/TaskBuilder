import toast from "react-hot-toast";
import { axiosSecure } from "../../../CustomHook/AxiosSecure";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
    const { register, handleSubmit } = useForm()
    const [task, setTasks] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        axiosSecure.get(`/task?id=${id}`)
            .then(e => setTasks(e.data))
            .catch(e => console.log(e.message))
    },[id])
    const editTask = (data) => {
        const etask = {
            "title": data.title,
            "description": data.description,
            "priority": data.priority
        }
        console.log(etask);
        axiosSecure.put(`/edittask`, {id,etask })
            .then(() => toast.success("Task added!"))
            .catch(e => console.log(e.message))
    }
    return (
        <div>{task &&
            <form onSubmit={handleSubmit(editTask)} className=" font-semibold">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" defaultValue={task.title} placeholder="title.." {...register('title')} className="input input-bordered w-2/4" required />
                </div>
                <div className=" form-control">
                    <label className="label">
                        <span className="label-text">Priority</span>
                    </label>
                    <select defaultValue={task.priority} {...register("priority")} className="select select-bordered w-full max-w-xs">
                        <option value={'high'}>High</option>
                        <option value={'medium'}>Medium</option>
                        <option value={'low'}>Low</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea defaultValue={task.description} placeholder="Description" {...register("description")} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div className="form-control mt-6 w-3/4 md:w-2/4 mx-auto">
                    <button className="btn btn-primary">Edit Task</button>
                </div>
            </form>}
        </div>
    );
};

export default Edit;