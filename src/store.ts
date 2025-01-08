import { createStore , combineReducers} from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomersSlice";
import { deposit } from "./features/accounts/AccountSlice";
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store =  createStore(rootReducer)
store.dispatch(deposit(100))
console.log(store.getState())
export default store