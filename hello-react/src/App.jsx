import TaskCard from "./TaskCard";
import "./TaskCard.css";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto my-6">
      <div className="header mx-28 ">
        <h1 className="project_title font-bold text-3xl "> Smarter Tasks</h1>
        <p className="project_description my-2 text-gray-700">
          <strong>Project:</strong> Graduation Final Year Project (Revamp
          College Website)
        </p>
      </div>
      <div className="body my-6 flex flex-wrap justify-center">
        <div className="card border-2 border-black  rounded-lg w-[500px]">
          <div className="my-1 p-2">
            <h2 className="text-center font-bold text-xl text-gray-600 mb-2">
              Pending
            </h2>
          </div>
          <TaskCard
            title={"Sample todo"}
            dueDate={"5th Aug"}
            assignee={"Shreedhar"}
            completedAtDate={false}
          />
          <TaskCard
            title={"Sample todo1"}
            dueDate={"6th Aug"}
            assignee={"Siddharth"}
            completedAtDate={false}
          />
          <p className="text-gray-600 font-semibold bg-gray-200 border-4 border-slate-50 rounded-md m-4 py-1">
            + New task
          </p>
        </div>

        <div className="card border-2 border-black  rounded-lg w-[500px] ml-12">
          <div className="my-1 p-2">
            <h2 className="text-center font-bold text-xl text-gray-600 mb-2">
              Done
            </h2>
          </div>
          <TaskCard
            title={"Sample todo3"}
            dueDate={"1st Aug"}
            assignee={"Shreedhar"}
            completedAtDate={true}
          />
          <TaskCard
            title={"Sample todo4"}
            dueDate={"2nd Aug"}
            assignee={"Siddharth"}
            completedAtDate={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
