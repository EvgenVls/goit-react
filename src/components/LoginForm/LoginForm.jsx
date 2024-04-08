export const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const form = event.target;
    const { login, password } = form.elements;
    console.log(login, password);
    console.log(login.value, password.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="text" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};
