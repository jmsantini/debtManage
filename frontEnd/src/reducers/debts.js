const initialState = {
    allClientsWithDebts: [],
    clientDebts:[],
    selectedClientId: ''
};


const clients = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DEBTLIST":
            return { ...state, allClientsWithDebts: action.payload.clientDebtList }
        case "SET_CLIENT_DEBTS_DETAILS":
            return {...state, clientDebts: action.payload.debts}

        case "SET_CLIENT_ID": 
            return { ...state, selectedClientId: action.payload.clientId}
        default:
            return state;
    }
}

export default clients;

