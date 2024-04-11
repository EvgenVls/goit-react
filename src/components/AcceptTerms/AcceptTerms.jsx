export const AcceptTerms = ({ accept, setAccept }) => {
  const handlChange = (event) => {
    setAccept(event.target.checked);
  };

  const handleClick = () => {
    console.log("You accept terms!");
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
      <button type="button" disabled={!accept} onClick={handleClick}>
        Proceed
      </button>
    </div>
  );
};
