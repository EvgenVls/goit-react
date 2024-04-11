export const AcceptTerms = (accept, setAccept) => {
  const handlChange = (event) => {
    setAccept(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={accept}
          onChange={handlChange}
        />
      </label>
      <button type="button" disabled={accept}>
        Proceed
      </button>
    </div>
  );
};
