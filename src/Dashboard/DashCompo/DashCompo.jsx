import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosSecure } from "../../CustomHook/AxiosSecure";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import toast from "react-hot-toast";
// import { data } from "autoprefixer";
// import toast from "react-hot-toast";
// a little function to help us with reordering the result
// const reorder =  (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result;
//   };
const initialData = {
    todo: [
        { id: 'task1', content: 'Task 1' },
        { id: 'task2', content: 'Task 2' },
        { id: 'task3', content: 'Task 3' },
    ],
    ongoing: [
        { id: 'task4', content: 'Task 4' },
        { id: 'task5', content: 'Task 5' },
    ],
    completed: [
        { id: 'task6', content: 'Task 6' },
        { id: 'task7', content: 'Task 7' },
    ],
};

const DashCompo = () => {
    const [tasks, setTasks] = useState(null)
    const [write, setWrite] = useState(false)
    const { user } = useContext(AuthContext)
    // const [items, setItems] = useState(null)
    useEffect(() => {
        axiosSecure.get(`/gettask?email=${user.email}`)
            .then(e => {
                setTasks(e.data)
                // setItems(e.data)
                console.log(e.data);
            })
            .catch(e => console.log(e.message))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onWriteable = () => {
        setWrite(!write)
    }
    const cdate = new Date()
    const isoDate = cdate.toISOString();
    const ltime = cdate.toLocaleTimeString([], { hour12: false });

    const dates = `${isoDate.slice(0, 10)}T${ltime}`;
    console.log(dates)
    const { register, handleSubmit } = useForm()

    const addtask = (data) => {
        const task = {
            "title": data.title,
            "email": user?.email,
            "description": data.description,
            "deadline": data.deadline,
            "priority": data.priority
        }
        console.log(task);
        //     axiosSecure.post('/addtask', { task })
        //         .then(() => toast.success("Thanks for your review"))
        //         .catch(e => console.log(e.message))
    }
    // const [tasks, setTasks] = useState(initialData);

    const onDragEnd = result => {
        const { source, destination, draggableId } = result;
        
        if (!destination) return;
        console.log(result);
        if (destination.droppableId !== source.droppableId) {
            const status = destination.droppableId
            const id = result.draggableId

            axiosSecure.put('changeStatus',{"id":id,"status":status})
            .then(()=>toast.success("Task : ", destination.droppableId))
            .catch(e=> console.log(e.message))           
        }

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        const sourceList = [...tasks[source.droppableId]];
        const destinationList = [...tasks[destination.droppableId]];
        const [movedTask] = sourceList.splice(source.index, 1);
        destinationList.splice(destination.index, 0, movedTask);

        setTasks({
            ...tasks,
            [source.droppableId]: sourceList,
            [destination.droppableId]: destinationList,
        });
    };
    return (
        <div className=" w-full min-h-full">
            <div className=" w-[calc(100%-80px)] bg-slate-100 mx-auto px-5 rounded-md py-4">
                {!write ?
                    <p onClick={onWriteable}>Add task</p>
                    :
                    <div>
                        <form onSubmit={handleSubmit(addtask)} className=" font-semibold">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="title.." {...register('title')} className="input input-bordered w-2/4" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input type="datetime-local" value={dates} {...register('deadline')} className="input input-bordered w-2/4" required />
                            </div>
                            <div className=" form-control">
                                <label className="label">
                                    <span className="label-text">Priority</span>
                                </label>
                                <select {...register("priority")} className="select select-bordered w-full max-w-xs">
                                    <option value={'high'}>High</option>
                                    <option value={'medium'}>Medium</option>
                                    <option value={'low'}>Low</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea placeholder="Description" {...register("description")} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                            </div>
                            <div className="form-control mt-6 w-3/4 md:w-2/4 mx-auto">
                                <button className="btn btn-primary">Add Task</button>
                            </div>
                        </form>
                        <div className=" w-full my-3 flex justify-center">
                            <button onClick={onWriteable} className=" w-3/4 md:w-2/4 btn btn-warning mx-auto">Cancel</button>
                        </div>
                    </div>
                }

            </div>
            {/* <ul>
                {
                    tasks &&
                    tasks.map(d => {
                        return 
                    })
                }
            </ul> */}
            {tasks &&
                <DragDropContext onDragEnd={onDragEnd}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
                        {Object.keys(tasks).map(columnId => (
                            <Droppable key={columnId} droppableId={columnId}>
                                {(provided, snapshot) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                            padding: 10,
                                            width: '300px',
                                            minHeight: '300px',
                                        }}
                                    >
                                        <h2>{columnId.charAt(0).toUpperCase() + columnId.slice(1)}</h2>
                                        {tasks[columnId].map((task, index) => (
                                            <Draggable key={task._id} draggableId={task._id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            userSelect: 'none',
                                                            margin: '0 0 2px 0',
                                                            minHeight: '50px',
                                                            backgroundColor: snapshot.isDragging ? '#263B4A' : '',
                                                            ...provided.draggableProps.style,
                                                        }}
                                                    >
                                                        <li className=" flex justify-between w-full mx-auto px-5 my-3 shadow-sm bg-slate-100 py-2 rounded-md">
                                                            <div className=" flex">
                                                                <Link className="ml-4 link link-hover self-center">{task.title.slice(0, 30)}...</Link>
                                                            </div>
                                                            <ul className=" flex text-2xl">
                                                                <li className=" mr-6"><FaRegEdit></FaRegEdit></li>
                                                                <li><MdDelete /></li>
                                                            </ul>
                                                        </li>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </div>
                </DragDropContext>
            }
        </div>
    );
};

export default DashCompo;