import { GET_PRODUCT } from '../actions/types';

const initialState = {
    hasLoaded: false,
    quantity: 1,
    product: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                hasLoaded: true,
                product: action.payload
            };
        default:
            return state
    }
}