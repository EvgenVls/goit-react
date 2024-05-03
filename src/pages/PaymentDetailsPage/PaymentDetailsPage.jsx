import { useEffect, useRef, useState, Suspense } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { getPaymentsById } from "../../payments-api";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? "/payments");

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
      <h3>
        <b>PaymentDetailsPage</b>
      </h3>
      {loader && <p>Please wait...</p>}
      <Link to={backLinkURLRef.current}>Go back</Link>
      {payment && <PaymentInfo payment={payment} />}
      <ul>
        <li>
          <Link to="bank">Bank</Link>
        </li>
        <li>
          <Link to="receipt">Receipt</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading nested route...</div>}>
        <Outlet />
      </Suspense>
      {error && <p>404</p>}
    </div>
  );
}
