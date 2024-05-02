import { useEffect, useState } from "react";
import { getPaymens } from "../../payments-api";
import PaymentsList from "../../components/PaymentsList/PaymentsList";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function featchPayments() {
      try {
        setLoading(true);
        const data = await getPaymens();
        setPayments(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    featchPayments();
  }, []);

  return (
    <div>
      <p>
        <b>Payments Page</b>
      </p>
      {loading && <b>Loading payments...</b>}
      {payments.length > 0 && <PaymentsList payments={payments} />}
    </div>
  );
}
