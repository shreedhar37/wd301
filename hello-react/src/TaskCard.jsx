/* eslint-disable react/prop-types */
import "./TaskCard.css";

const TaskCard = (props) => {
  const { title, dueDate, assigneeName, completedAtDate } = props;
  return (
    <div className="m-4 p-4 border-2 border-black rounded-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {dueDate ? (
        <p>Due on: {dueDate}</p>
      ) : (
        <p>Completed on: {completedAtDate}</p>
      )}
      <p>Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
