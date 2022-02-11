import { 
    GET_RECIPES, 
    SET_LOADING, 
    RECIPES_ERROR, 
    SEARCH_RECIPES,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../actions/types';

const initialState = {
    recipes: null,
    current: null,
    loading: false,
    error: null
};

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                loading: false
            };
        case SEARCH_RECIPES:
            return {
                ...state,
                recipes: action.payload
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case RECIPES_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};