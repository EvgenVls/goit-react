import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export default function Task({ task }) {
  return (
    <div className={css.wrapper}>
      <input type="checkbox" className={css.checkbx} checked={task.completed} />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
}
