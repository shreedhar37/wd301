import React from "react";
import "./TaskCard.css";

class Task extends React.Component<TaskProp> {

    render() {
        return (
          <div className="TaskItem shadow-md border border-slate-100">
            <h2 className="text-base font-bold my-1">{this.props.title}</h2>
            <p className="text-sm text-slate-500">
              Due Date: {this.props.dueDate}
            </p>
            <p className="text-sm text-slate-500">
              Description: {this.props.description}
            </p>
          </div>
        );
      }
}



interface TaskProp{
    title: string,
    dueDate: string,
    description: string
}

export default Task;