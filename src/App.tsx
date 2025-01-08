import AccountOperations from "./features/accounts/AccountOperations"
import BalanceDisplay from "./features/accounts/BalanceDisplay"
import CreateCustumer from "./features/customers/CreateCustumer"
import Customer from "./features/customers/Customer"
import { useSelector } from "react-redux"
import { RootState } from "./store"
function App() {

  const customer  = useSelector((state:RootState) => state.customer)
  return (

    <div>
      {!customer.fullName ? 
      <CreateCustumer /> 

       : 
       <>
       <Customer />
       <BalanceDisplay />
       <AccountOperations />
       </>
       }
      {/* //ro sheikmneba customer gakreba es komponenti */}
      {/* // ak gamochndeba customer */}
    </div>
  )
}

export default App
