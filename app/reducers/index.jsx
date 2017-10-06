import { combineReducers } from 'redux'

import userinfo from './userinfo'

const rootReducer = combineReducers({
    userinfo : userinfo
    // userinfo2: userinfo
})

export default rootReducer