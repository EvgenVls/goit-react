import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksOps";
import css from "./Task.module.css";

export default function Task({ task }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
