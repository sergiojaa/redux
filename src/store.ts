import { createStore, combineReducers } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customer/customerSlice";
import { deposit } from "./features/accounts/accountSlice";
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store = createStore(rootReducer)

export default store;