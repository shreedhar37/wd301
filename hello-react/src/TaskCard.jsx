import "./TaskCard.css";

const TaskCard = (props) => {
  const { title, dueDate, assignee, completedAtDate } = props;
  return (
    <div className="m-4 p-4 border-2 border-black rounded-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {!completedAtDate ? (
        <p>Due on: {dueDate}</p>
      ) : (
        <p>Completed on: {dueDate}</p>
      )}
      <p>Assignee: {assignee}</p>
    </div>
  );
};

export default TaskCard;
