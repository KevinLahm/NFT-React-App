import {
    IS_LOADING_ARTS,
    GET_ARTS_SUCCESS,
    GET_ARTS_FAILED,
    DELETE_ART
} from '../Actions/actionTypes';

const initialState = {
    isLoading: false,
    arts: [],
    error: null
}
const artsReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOADING_ARTS: 
            return {
                ...state,
                isLoading: true
            }
        case GET_ARTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                arts: action.payload.data
            }
        case GET_ARTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case DELETE_ART:
            return {
                ...state,
                isLoading: false,
               arts: action.payload.data
            }
        default:
            return state;
    }
}

export default artsReducer;