import {combineReducers} from 'redux'
import boilerplate from './boilerplate/boilerplate-reducer'
import content from './content'
import filters from './filters/filters-reducer'

export default combineReducers({boilerplate, content, filters})
