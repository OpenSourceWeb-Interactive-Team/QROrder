import { combineReducers } from 'redux'

import basket from './basket'
import process from './process'

const rootReducer = combineReducers({ basket, process })

export default rootReducer
