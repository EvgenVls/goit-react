import { useId } from "react";

export const ControlledForm = ({ formValues, setFormValues }) => {
  const loginId = useId();

  return (
    <form>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" htmlFor={loginId} />
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">LogIn</button>
    </form>
  );
};
