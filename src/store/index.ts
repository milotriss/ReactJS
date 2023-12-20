import {combineReducers, createStore} from 'redux'
import countReducer from './reducers/count.reducer'
const rootReducer = combineReducers({
    count: countReducer
})
const store = createStore(rootReducer)
export default store