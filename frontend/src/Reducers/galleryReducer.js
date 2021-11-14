import { 
    IS_LOADING, 
    GET_GALLERIES_SUCCESS, 
    GET_GALLERIES_FAILED 
} from '../Actions/actionTypes';

const initialState = { 
    galleries: [], 
    loading: false,
    error: null
};
const galleriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_GALLERIES_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                galleries: data,
                loading: false,
                error: null,
            }
        case GET_GALLERIES_FAILED:
            const { error } = action.payload;
            return {
                ...state,
                error,
                loading: false
            }

        case 'ADD_GALLERIES':
            return {
            ...state,
            galleries: action.galleries,
            loading: false
            }
        default:
            return state;
    }
  }
  
  export default galleriesReducer;