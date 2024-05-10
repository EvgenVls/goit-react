import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../../redux/langSlice";

export default function LangSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.locale.lang);

  return (
    <select value={lang} onChange={(e) => dispatch(changeLang(e.target.value))}>
      <option value="uk">UK</option>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
}
