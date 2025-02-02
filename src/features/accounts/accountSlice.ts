import { Action } from "redux";

const accountInitialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
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
export default function accountReducer(state: accountState = accountInitialState, action: accountActions) {
    switch (action.type) {
        case 'account/deposit':
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
export function deposit(amount: number): DepositActions {
    return { type: 'account/deposit', payload: amount }
}
export function withdraw(amount: number): withdrawAction {
    return { type: 'account/withdraw', payload: amount }
}
export function requestLoan(amount: number, purpose: string): requestLoan {
    return { type: 'account/requestLoan', payload: { amount, purpose } }
}
export function payloan(): payloanAction {
    return { type: 'account/payloan' }
}