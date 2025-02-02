import { Action } from "redux";

const customerInitialState = {
    fullName: '',
    nationalID: '',
    createdAt: ''
}

interface customerState {
    fullName: string,
    nationalID: string,
    createdAt: string
}
interface createCustomerAction extends Action {
    type: 'customer/createCustomer';
    payload: {
        fullName: string;
        nationalID: string;
        createdAt: string
    }
}
interface updateNameAction extends Action {
    type: 'customer/updateName';
    payload: {
        fullName: string
    }
}
type customerAction = createCustomerAction | updateNameAction

export default function customerReducer(state: customerState = customerInitialState, action: customerAction) {
    switch (action.type) {
        case 'customer/createCustomer':
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalIdD: action.payload.nationalID,
                createdAt: action.payload.createdAt,

            }
        case 'customer/updateName':
            return {
                ...state,
                fullName: action.payload.fullName
            }
        default:
            return state;
    }
}
export function createCustomer(
    fullName: string,
    nationalID: string,
): createCustomerAction {
    return {
        type: 'customer/createCustomer',
        payload: { fullName, nationalID, createdAt: new Date().toISOString() }
    }
}
export function updateName(fullName: string): updateNameAction {
    return { type: 'customer/updateName', payload: { fullName } }
}