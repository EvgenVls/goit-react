function CoffeeSize(coffeeSize, setCoffeeSize) {
  return (
    <div>
      <h2>Select coffee size</h2>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
        />
        Large
      </label>
    </div>
  );
}

export default CoffeeSize;
