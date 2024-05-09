import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../redux/store";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);

  return (
    <div>
      <p>Balance: {balance} credits</p>
      <input type="number" />
      <button onClick={() => dispatch(deposit(10))}>Deposit credits</button>
      <button onClick={() => dispatch(withdraw(5))}>Withdraw credits</button>
    </div>
  );
}
