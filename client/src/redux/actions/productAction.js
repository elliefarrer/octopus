// import axios from 'axios';

import { GET_PRODUCT } from './types';

export const getProduct = () => dispatch => {
    fetch('/api/lightbulb')
        .then(res => res.json())
        .then(product => 
            dispatch({
                type: GET_PRODUCT,
                payload: product
            }))
}
