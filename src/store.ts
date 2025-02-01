const accountInitialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
}
function accountReducer(state = accountInitialState, action) {
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
            break;


        case 'account/payLoan': {
            return {
                ...state,
                loan: 0,
                loanPurpose: '',
                balance: state.balance - action.loan
            }
        }
        default:
            return state
    }

}