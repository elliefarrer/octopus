import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
)
)

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';

// export default function store() {


//     return createStore(
//         rootReducer,
//         composeWithDevTools(
//             applyMiddleware(
//                 thunk
//             )
//         )
//     );
// }