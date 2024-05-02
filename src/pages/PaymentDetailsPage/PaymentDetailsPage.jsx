import { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { getPaymentsById } from "../../payments-api";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function featchPayment() {
      try {
        setLoader(true);
        const data = await getPaymentsById(paymentId);
        setPayment(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    featchPayment();
  }, [paymentId]);

  return (
    <div>
      <b>PaymentDetailsPage</b>
      {loader && <p>Please wait...</p>}
      {payment && <PaymentInfo payment={payment} />}
      <ul>
        <li>
          <Link to="bank">Bank</Link>
        </li>
        <li>
          <Link to="receipt">Receipt</Link>
        </li>
      </ul>
      <Outlet />
      {error && <p>404</p>}
    </div>
  );
}
