import { GET_USER } from './UserContext';

const userReducer = (state, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, user: action.payload }
        default:
            return state;
    }
}

export default userReducer;