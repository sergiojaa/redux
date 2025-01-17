import { createStore, combineReducers, applyMiddleware } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomersSlice";
import { thunk } from "redux-thunk";
import { deposit } from "./features/accounts/AccountSlice";
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
const store = createStore(rootReducer,
    applyMiddleware(thunk)
)

export default store