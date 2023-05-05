const TaskCard = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Completed on : due date... </p>
      <p>Assignee: Shreedhar</p>
    </div>
  );
};
export default TaskCard;
