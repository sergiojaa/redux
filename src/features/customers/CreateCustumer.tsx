import { useState } from "react"

import { createCustomer } from "./CustomersSlice"
import { AppDispatch } from "../../store"
import { useDispatch } from "react-redux"
export default function CreateCustumer() {
    const [fullName, setFullName] = useState<string>('')
    const [nationalID, setNationalID] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()
  
    const handleCreateCustomer = () => {
        if(!fullName || !nationalID) return;
        dispatch(createCustomer(fullName, nationalID))
    }
  return (
    <div className="flex justify-center gap-3  items-center flex-col">
        <div>
            <h1>Create Customer</h1>
                <form>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    className="border border-gray-400 p-1"

                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    />

                </form>
        </div>
        <div>
            <h1></h1>
                <form>
                    <label htmlFor="nationalId">customer national ID</label>
                    <input 
                    type="text" 
                    className="border border-gray-400 p-1"
                    id="nationalId" 
                    value={nationalID}
                    onChange={(e) => setNationalID(e.target.value)}
                    />

                </form>
        </div>
        <button className="text-white bg-red-500 p-1 rounded-2xl" onClick={handleCreateCustomer}>Create new Customer</button>
  
    </div>
  )
}
