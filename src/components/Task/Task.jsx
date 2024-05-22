import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/operations";
import css from "./Task.module.css";

export default function Task({ id, text }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
