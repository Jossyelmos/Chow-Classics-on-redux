import { 
    GET_RECIPES, 
    SET_LOADING, 
    RECIPES_ERROR, 
    SEARCH_RECIPES,
    SET_CURRENT,
    CLEAR_CURRENT 
} from './types';

// Get Recipes from server
export const getRecipes = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('https://chow-backends.herokuapp.com/recipes');
        const data = await res.json();

        dispatch({
            type: GET_RECIPES,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: RECIPES_ERROR,
            payload: err.response.statusText
        });
    }
};

// Search server Recipes
export const searchRecipes = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`https://chow-backends.herokuapp.com/recipes?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_RECIPES,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: RECIPES_ERROR,
            payload: err.response.statusText
        });
    }
};

// Set Current log
export const setCurrent = recipe => {
    return {
        type: SET_CURRENT,
        payload: recipe
    }
};

// Clear Current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};