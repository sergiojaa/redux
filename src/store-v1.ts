import { createStore, Action, combineReducers } from "redux";
const accountInitialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
}
const ACCOUNT_DEPOSIT = 'account/deposit';
const customerInitialState = {
    fullName: '',
    nationalID: '',
    createdAt: ''
}
interface accountState {
    balance: number;
    loan: number;
    loanPurpose: string
}
interface DepositActions extends Action {
    type: 'account/deposit';
    payload: number
}
interface withdrawAction extends Action {
    type: 'account/withdraw';
    payload: number
}
interface requestLoan extends Action {
    type: 'account/requestLoan';
    payload: {
        amount: number;
        purpose: string
    }
}
interface payloanAction extends Action {
    type: 'account/payloan'
}

type accountActions =
    DepositActions
    | withdrawAction
    | requestLoan
    | payloanAction

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
function accountReducer(state: accountState = accountInitialState, action: accountActions) {
    switch (action.type) {
        case ACCOUNT_DEPOSIT:
            return {
                ...state,
                balance: state.balance + action.payload
            }

        case 'account/withdraw':
            return {
                ...state,
                balance: state.balance - action.payload
            }

        case 'account/requestLoan':
            if (state.loan > 0) return state;
            return {
                ...state,
                balance: state.balance + action.payload.amount,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose
            }


        case 'account/payloan': {
            return {
                ...state,
                loan: 0,
                loanPurpose: '',
                balance: state.balance - state.loan
            }
        }
        default:
            return state
    }

}
function customerReducer(state: customerState = customerInitialState, action: customerAction) {
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
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})
const store = createStore(rootReducer)

store.dispatch<DepositActions>(deposit(100000))
console.log(store.getState())

store.dispatch<withdrawAction>(withdraw(50000))

console.log(store.getState())
store.dispatch<requestLoan>(requestLoan(1000000, 'buy a car'))
console.log(store.getState())
store.dispatch<payloanAction>(payloan())
console.log(store.getState())
function deposit(amount: number): DepositActions {
    return { type: ACCOUNT_DEPOSIT, payload: amount }
}
function withdraw(amount: number): withdrawAction {
    return { type: 'account/withdraw', payload: amount }
}
function requestLoan(amount: number, purpose: string): requestLoan {
    return { type: 'account/requestLoan', payload: { amount, purpose } }
}
function payloan(): payloanAction {
    return { type: 'account/payloan' }
}
function createCustomer(
    fullName: string,
    nationalID: string,
): createCustomerAction {
    return {
        type: 'customer/createCustomer',
        payload: { fullName, nationalID, createdAt: new Date().toISOString() }
    }
}
function updateName(fullName: string): updateNameAction {
    return { type: 'customer/updateName', payload: { fullName } }
}
store.dispatch<createCustomerAction>(
    createCustomer('john doe', '1234566'))
console.log(store.getState()
)
store.dispatch<createCustomerAction>(
    createCustomer('sergi doe', '1234566'))
console.log(store.getState()
)