import TaskCard from "./TaskCard";
import * as React from 'react'; 
function App() {
  interface TaskCard {
    title: string;
    dueDate: string;
    completedAtDate: string;
    assigneeName: string;
  }

  const pendingTask1 : TaskCard = {
    title: "Build the website with static content",
    dueDate: "10th April",
    completedAtDate: "",
    assigneeName: "Rohit S",
  }

  const  pendingTask2 : TaskCard = {
    title: "Add a blog",
    dueDate: "22nd March",
    completedAtDate: "",
    assigneeName: "Rohit M",
  }

  const completedTask1 : TaskCard = {
    title: "Design the mockup",
    dueDate: "",
    completedAtDate: "10th April",
    assigneeName: "Rohit M",
  }

  const completedTask2 : TaskCard = {
    title: "Get the approval from principal",
    dueDate: "",
    completedAtDate: "20th April",
    assigneeName: "Ajay S",
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Smarter Tasks</h1>
      <p>
        <span className="text-gray-500 font-bold">Project: </span>
        <span className="text-gray-500">
          Graduation Final Year Project (Revamp College Website)
        </span>
      </p>
      <div className="flex">
        <div className="TaskItem">
          <h1 className="text-center">Pending</h1>
          <TaskCard
            title= {pendingTask1.title}
            dueDate= {pendingTask1.dueDate}
            assigneeName={pendingTask1.assigneeName}
          ></TaskCard>
          <TaskCard
            title={pendingTask2.title}
            dueDate={pendingTask1.dueDate}
            assigneeName={pendingTask1.assigneeName}
          ></TaskCard>
          <p className="TaskItem"> + New Task </p>
        </div>
        <div className="TaskItem">
          <h1 className="text-center">Done</h1>
          <TaskCard
            title={completedTask1.title}
            completedAtDate={completedTask1.completedAtDate}
            assigneeName={completedTask1.assigneeName}
          ></TaskCard>
          <TaskCard
            title={completedTask2.title}
            completedAtDate={completedTask2.completedAtDate}
            assigneeName={completedTask2.assigneeName}
          ></TaskCard>
        </div>
      </div>
    </div>
  );
}

export default App;
