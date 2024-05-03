import { useEffect, useMemo, useState } from "react";
import { getPaymens } from "../../payments-api";
import PaymentsList from "../../components/PaymentsList/PaymentsList";
import OwnerFilter from "../../components/OwnerFilter/OwnerFilter";
import { useSearchParams } from "react-router-dom";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const ownerParam = searchParams.get("owner") ?? "";

  const changeOwnerFilter = (newFilter) => {
    searchParams.set("owner", newFilter);
    setSearchParams(searchParams);
  };

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

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) =>
      payment.cardOwner.toLowerCase().includes(ownerParam.toLowerCase())
    );
  }, [payments, ownerParam]);

  return (
    <div>
      <p>
        <b>Payments Page</b>
      </p>
      <OwnerFilter value={ownerParam} onFilter={changeOwnerFilter} />
      {loading && <b>Loading payments...</b>}
      {payments.length > 0 && <PaymentsList payments={filteredPayments} />}
      {error && <p>404</p>}
    </div>
  );
}
