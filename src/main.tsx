import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { Provider } from 'react-redux'
// import './store-v1.ts'
import store from './store.ts'
import { deposit } from "./features/accounts/accountSlice";
import { createCustomer } from './features/customer/customerSlice.ts'

store.dispatch(deposit(1000000))
console.log(store.getState())
store.dispatch(createCustomer('sergi', "19"))
console.log(store.getState())
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider  > */}
    <App />
    {/* </Provider> */}
  </StrictMode>,
)
