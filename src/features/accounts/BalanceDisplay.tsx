import { useSelector } from "react-redux"
import { RootState } from "../../store"
function formatCurrency(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value)
}
export default function BalanceDisplay() {
    const balance = useSelector((store: RootState) => store.account.balance)
    return (
        <div>
            <h1>balance:{formatCurrency(balance)} </h1>
        </div>
    )
}
