import TaskCard from "./TaskCard";
function App() {
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
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          ></TaskCard>
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          ></TaskCard>
          <p className="TaskItem"> + New Task </p>
        </div>
        <div className="TaskItem">
          <h1 className="text-center">Done</h1>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          ></TaskCard>
          <TaskCard
            title="Get the approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          ></TaskCard>
        </div>
      </div>
    </div>
  );
}

export default App;
