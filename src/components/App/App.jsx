import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import PaymentsPage from "../../pages/PaymentsPage/PaymentsPage";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
// import css from "./App.module.css";

function App() {
  return (
    <Layout>
      <h1>Routing in react</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
