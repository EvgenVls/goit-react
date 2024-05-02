export default function OwnerFilter({ value, onFilter }) {
  return (
    <div>
      Filter by owner
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
