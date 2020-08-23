const initialState = {
    allUsers: []
};


const users = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {...state, allUsers: action.payload.user}
            default:
                return state;
    }
}

export default users;


