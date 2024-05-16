import { Formik, Form, Field } from "formik";
import css from "./TaskForm.module.css";

export default function TaskForm() {
  return (
    <Formik
      initialValues={{
        text: "",
      }}
    >
      <Form className={css.form}>
        <Field
          className={css.field}
          name="text"
          placeholder="Enter task text..."
        />
        <button>Add task</button>
      </Form>
    </Formik>
  );
}
