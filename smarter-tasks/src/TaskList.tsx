import Task from "./Task";
import { TaskItem } from "./types";


const TaskList = (props: Props) => {
    return props.tasks.map((task, idx) => (
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
    ));
  };

interface Props{

    tasks: TaskItem[]

}




export default TaskList;