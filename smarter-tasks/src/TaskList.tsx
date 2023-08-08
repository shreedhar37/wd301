import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

class TaskList extends React.Component<Props, State>{

   
    render(){
       return this.props.tasks.map((task, index) => <Task key={index} title={task.title}/>)
    }
}


interface Props{

    tasks: TaskItem[]

}



interface State{
}
export default TaskList;