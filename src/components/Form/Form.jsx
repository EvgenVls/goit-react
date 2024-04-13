import css from "./Form.module.css";

export default function Form({ onAdd }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({
      text: event.target.elements.text.value,
      id: Date.now(),
    });
    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.field} type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
}
