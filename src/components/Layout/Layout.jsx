import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
// import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Please wait loaging page...</div>}>
        {children}
      </Suspense>
    </div>
  );
}
