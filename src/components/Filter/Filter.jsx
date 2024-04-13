import css from "./Filter.module.css";

export default function Filter({ value, onFilter }) {
  return (
    <div>
      <p className={css.label}>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          onFilter(event.target.value);
        }}
      />
    </div>
  );
}
