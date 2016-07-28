import {combineReducers} from 'redux'
import boilerplate from './boilerplate/boilerplate-reducer'
import content from './content'

export default combineReducers({boilerplate, content})
