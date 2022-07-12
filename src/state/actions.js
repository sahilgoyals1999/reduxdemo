import axios from "axios"

export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}

export const addToCart = (data) => {
    return {
        type: 'ADD_TO_CART',
        data: data
    }
}

export const removeFromCart = (data) => {
    return {
        type: 'REMOVE_FROM_CART',
        data: data
    }
}

export const fetchDataInit = () => {
    return {
        type: 'FETCHING'
    }
}

export const fetchDataFailure = () => {
    return {
        type: 'FETCHING_FAILURE'
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: 'FETCHING_SUCCESS',
        data: data
    }
}

export const getData = (url) => {
    return async (dispatchAction) => {
        dispatchAction(fetchDataInit());
        try {
            let result = axios.get(url);
            dispatchAction(fetchDataSuccess(result));
        }
        catch(ex) {
            dispatchAction(fetchDataFailure());
        }
    }
}