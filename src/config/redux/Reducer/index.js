import { combineReducers } from "redux";

const initialBaseUrl = {
    baseUrl: 'https://dev.symadeco.com'
}

const BaseUrlReducer = (state = initialBaseUrl, action) => {
    return state
}

const reducer = combineReducers({
    BaseUrlReducer
})

export default reducer