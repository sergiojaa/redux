import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { deposit } from "./AccountSlice"

export default function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState<string | number>('')
  const [withdrawAmount, setWithdrawAmount] = useState<string | number>('')
  const [loanAMount, setLoanAmount] = useState<string | number>('')
  const [loaPurpose, setLoanPurpose] = useState('')
  const [currency, setCurrency] = useState<string>('usd')
  const dispatch = useDispatch<AppDispatch>()
  const handleDeposit = () => {
    if (!depositAmount) return
    dispatch(deposit(depositAmount))
  }
  const handlePayLoan = () => {

  }
  const handleRequestLoan = () => {

  }
  const handleWithdraw = () => {

  }
  return (
    <div>
      <h2>your account operations</h2>
      <div>
        <div>
          <div>
            <label htmlFor="">Deposit</label>
            <input
              value={depositAmount}
              onChange={(e) => setDepositAmount(+e.target.value)}
              type="number" />
          </div>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>

          </select>
          <button onClick={handleDeposit}>Deposit</button>
        </div>
        <div>
          <div>
            <label htmlFor="">withdraw</label>
            <input onChange={(e) => setWithdrawAmount(+e.target.value)} value={withdrawAmount} type="number" />
            <button onClick={handleWithdraw}>withdraw</button>
          </div>
          <div>
            <label htmlFor="">Request Loan</label>
            <input onChange={(e) => setLoanAmount(+e.target.value)} value={loanAMount} type="number" />
            <input onChange={(e) => setLoanPurpose(e.target.value)} value={loanAMount} type="text" />
            <button onClick={handleRequestLoan}>Request Loan</button>


          </div>
          <div>
            <label htmlFor="Pay Loan"></label>
            <input onChange={(e) => setLoanAmount(+e.target.value)} value={loanAMount} type="number" />
            <button onClick={handlePayLoan}>pay Loan</button>

          </div>
        </div>
      </div>
    </div>
  )
}
