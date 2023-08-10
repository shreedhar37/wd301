import "./TaskCard.css";
import { TaskItem } from "./types";



const Task = (props: TaskItem) => {

  return (
      <ul>
        <li className="flex flex-wrap justify-between items-center m-4">
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">{props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
      </div>
      <div>
      <button className="deleteTaskButton bg-red-500 p-4 text-white rounded-md shadow-md">Delete</button>
      </div>
      </li>
      </ul>
  );
}



export default Task;