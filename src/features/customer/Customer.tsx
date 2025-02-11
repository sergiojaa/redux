import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function Customer() {
    const customer = useSelector((store: RootState) => store.customer)
    return (
        <div>
            <h3>welcome{customer.fullName}</h3>
        </div>
    )
}
