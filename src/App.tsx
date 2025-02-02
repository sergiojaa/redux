import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCustomer from "./features/customer/CreateCustomer";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Customer from "./features/customer/Customer";

function App() {
  const customer = useSelector((state: RootState) => state.customer);
  return (
    <>
      {!customer.fullName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <BalanceDisplay />
          <AccountOperations />
        </>
      )}
    </>
  );
}

export default App;