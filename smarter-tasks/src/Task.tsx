import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  task: TaskItem;
  id: string,
  removeTask: () => void;
}
const Task = (props: TaskProps) => {
  const { task, id, removeTask } = props;
  console.log(id)
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${id || ""}`}>
            <h2 className="text-base font-bold my-1">{task.title}</h2>
          </a>
          <p className="text-sm text-slate-500">{task.dueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {task.description}
          </p>
        </div>

        <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => removeTask()}>
          X
        </button>
      </div>
    </div>
  );
};

export default Task;