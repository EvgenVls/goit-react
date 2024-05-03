import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
// import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const PaymentsPage = lazy(() =>
  import("../../pages/PaymentsPage/PaymentsPage")
);
const PageNotFound = lazy(() =>
  import("../../pages/PageNotFound/PageNotFound")
);
const PaymentDetailsPage = lazy(() =>
  import("../../pages/PaymentDetailsPage/PaymentDetailsPage")
);
const BankInfo = lazy(() => import("../BankInfo/BankInfo"));
const ReceiptInfo = lazy(() => import("../ReceiptInfo/ReceiptInfo"));

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
