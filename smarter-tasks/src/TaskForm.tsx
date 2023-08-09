import React from "react";

import { TaskItem } from "./types";

interface TaskFormProps{
    addTask: (task: TaskItem) => void;
}

interface TaskFormState{
 title: string,
 dueDate: string,
 description: string
}


class TaskForm extends React.Component<TaskFormProps, TaskFormState>{

    inputRef = React.createRef<HTMLInputElement>();
    
    
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
          title: "",
          dueDate: "",
          description: ""
        }
      }

      addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
          title: this.state.title,
          dueDate: this.state.dueDate,
          description: this.state.description
        };
        this.props.addTask(newTask);
        this.setState({ title: "", dueDate: "", description: "" });
      };
    


      titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ title: event.target.value });
      };

      dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ dueDate: event.target.value });
      };

      descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ description: event.target.value });
      };

    


    render(){
        return (
            <form onSubmit={this.addTask}>
              <input type="text" className="border-2 border-black p-1 m-2" id="todoTitle" value={this.state.title} onChange={this.titleChanged} placeholder="title" required/>
              <br></br>
              <input type="text"  className="border-2 border-black p-1 m-2" id="todoDueDate" value={this.state.dueDate} onChange={this.dueDateChanged} placeholder="Due Date" required/>
              <br></br>
              <input type="text"  className="border-2 border-black p-1 m-2" id="todoDescription" value={this.state.description} onChange={this.descriptionChanged}  placeholder="description" required/>
              <br></br>
              <button type="submit" className="border-2 border-black bg-slate-50 p-2 m-2" id="addTaskButton">Add item</button>
            </form>
          )
    }
}

export default TaskForm;