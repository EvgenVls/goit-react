import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./FeedbackForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!"),
  message: Yup.string()
    .min(3, "Too short!")
    .max(256, "Too long!")
    .required("Required"),
  lavel: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  lavel: "good",
};

export default function FeedbackForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const messageFildId = useId();
  const lavelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            htmlFor={nameFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            htmlFor={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div>
          <label htmlFor={messageFildId}>Message</label>
          <Field
            as="textarea"
            className={css.field}
            name="message"
            htmlFor={messageFildId}
            rows="5"
          />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>

        <label htmlFor={lavelFieldId}>Service satisfaction level</label>
        <Field
          as="select"
          className={css.field}
          name="lavel"
          htmlFor={lavelFieldId}
        >
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>
        <ErrorMessage className={css.error} name="lavel" component="span" />
        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
