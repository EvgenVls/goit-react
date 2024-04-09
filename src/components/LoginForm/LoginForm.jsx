import { useId } from "react";

export const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);

    const form = event.target;
    const { login, password } = form.elements;
    onLogin({
      lodin: login.value,
      password: password.value,
    });
    // console.log(login, password);
    // console.log(login.value, password.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />
      <label htmlFor={passwordId}>Password</label>
      <input type="text" name="password" id={passwordId} />
      <button type="submit">Log in</button>
    </form>
  );
};
