import css from "./AppBar.module.css";
import TaskCounter from "../TaskCounter/TaskCounter";
import StatusFilter from "../StatuFilter/StatusFilter";

export default function AppBar() {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
}
