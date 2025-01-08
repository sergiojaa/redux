import { Action } from "redux";

const customerInitialState = {
    fullName: "",
    nationalId: '',
    createdAt: ""
}


interface CustomerState {
    fullName: string;
    nationalId: string;
    createdAt: string;
}
interface createCustomerAction extends Action {
    type: "customer/createCustomer";
    payload: {
        fullName: string;
        nationalId: string;
        createdAt: string;
    }
}
interface updateNameAction extends Action {
    type: "customer/updateName";
    payload: {
        fullName: string;
    }
}
type customerActions = createCustomerAction | updateNameAction;
//state rom ar gvkondes initial states aigebs sawkisad tavis dazgvevis miznit

export default function customerReducer(
    state: CustomerState = customerInitialState ,
    action: customerActions
){
    switch(action.type){
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalId: action.payload.nationalId,
                createdAt: action.payload.createdAt
            }
            case "customer/updateName":
                return {
                    ...state,
                    fullName: action.payload.fullName
                }
                 default :
                    return state;
    }
}
export function createCustomer(
    fullName: string,
    nationalId: string,
): createCustomerAction{
    return {
        type: "customer/createCustomer",
        payload: {fullName, nationalId, createdAt:new Date().toISOString()}
    }
}
export function updateName(fullName: string): updateNameAction{
    return {type: "customer/updateName", payload: {fullName}}
}