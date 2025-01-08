import { Action } from "redux";

const accountInitialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
}
interface accoutState {
    balance:number,
    loan:number,
    loanPurpose: string
}
interface DepositAction extends Action {
    type: "account/deposit";
    payload:number
}
interface WithdrawAction extends Action {
    type: "account/withdraw";
    payload:number
}
interface RequestAction extends Action {
    type: "account/requestLoan"
    payload: {
        amount: number;
        purpose:string;
    }
}
interface PayloanAction extends Action {
    type: 'account/payLoan'
}
type AccountActions = 
    DepositAction |
    WithdrawAction | 
    RequestAction | 
    PayloanAction;

   export default function accountReducer(
        state : accoutState = accountInitialState, 
         action: AccountActions
        ){
        switch(action.type){
            // caseshi /-ismarcxniv ra unda sheicvalos, marjvniv mokmedeba
            case "account/deposit" :
                return {
                    ...state,
                    balance: state.balance + action.payload
                }
            
            case "account/withdraw": 
                return {
                    ...state,
                    balance: state.balance - action.payload
                }
            
            case 'account/requestLoan': 
                if(state.loan > 0) return state;
                return {
                    ...state,
                    loan: action.payload.amount, 
                    loanPurpose: action.payload.purpose,  
                    balance: state.balance + action.payload.amount,
                }
            
            case 'account/payLoan': 
                return {...state, loan: 0, loanPurpose: "",
                    balance: state.balance - state.loan
                }
                default: 
                return state;
            
    
        }
    }
    export function deposit(amount: number): DepositAction{
        return {type: "account/deposit" , payload:amount}
    }
    export function withdraw(amount:number): WithdrawAction{
        return {type: "account/withdraw", payload:amount}
    
    }
    export function requestLoan(amount : number,purpose: string):AccountActions{
        return {type: "account/requestLoan", payload:{amount, purpose}}
    
    }
    export function payLoan(): PayloanAction{
        return {type: "account/payLoan"}
    }