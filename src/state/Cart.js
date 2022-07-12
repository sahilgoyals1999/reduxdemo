const initialState = {
    cartItems: []
};

export const Cart = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            const items = state.cartItems;
            items.push(action.data);
            return { ...state, cartItems: items };
        case 'REMOVE_FROM_CART':
            const items1 = state.cartItems;
            let index = items1.findIndex(x => x.id == action.data.id);
            items1.splice(index, 1);
            return { ...state, cartItems: items1 };
        default:
            return { ...state };
    }
};