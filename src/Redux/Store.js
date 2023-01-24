import {legacy_createStore as createStore,combineReducers} from 'redux'
import { reducer } from './Reducer'
const rootReducer=combineReducers({text:reducer})
export const store=createStore(rootReducer)