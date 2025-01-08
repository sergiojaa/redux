import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./store.ts"
import store from "./store.ts"
import { deposit } from './features/accounts/AccountSlice.ts'
import { createCustomer } from './features/customers/CustomersSlice.ts'

store.dispatch(deposit(100))
store.dispatch(createCustomer('sergi','123'))
console.log(store.getState())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
