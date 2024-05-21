import css from "./Task.module.css";

export default function Task({ id, text }) {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button}>
        Delete
      </button>
    </div>
  );
}
