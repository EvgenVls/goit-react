import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import PaymentsPage from "../../pages/PaymentsPage/PaymentsPage";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import PaymentDetailsPage from "../../pages/PaymentDetailsPage/PaymentDetailsPage";
import BankInfo from "../BankInfo/BankInfo";
import ReceiptInfo from "../ReceiptInfo/ReceiptInfo";
// import css from "./App.module.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
          <Route path="bank" element={<BankInfo />} />
          <Route path="receipt" element={<ReceiptInfo />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
