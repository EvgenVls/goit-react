import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <p>Oooops! Page not found! Sorry!</p>
      <p>
        Please visit out <Link to="/">Home page</Link>
      </p>
    </div>
  );
}
