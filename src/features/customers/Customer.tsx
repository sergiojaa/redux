import { useSelector } from "react-redux"
import { RootState } from "../../store"

export default function Customer() {
    const customer = useSelector((store:RootState) => store.customer)
  return (
    <div>
      <h1>welcome: {customer.fullName}</h1>
    </div>
  )
}
