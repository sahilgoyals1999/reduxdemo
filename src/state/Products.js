const initialState = {
    status: '',
    data: []
};

export const Products = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCHING':
            console.log('fetching....');
            return { ...state, status: 'loading' };
        case 'FETCHING_SUCCESS':
            console.log('success');
            return { ...state, status: 'success', data: action.data };
        case 'FETCHING_FAILURE':
            console.log('failure');
            return { ...state, status: 'failure', data: [] };
        default:
            return { ...state };
    }
}