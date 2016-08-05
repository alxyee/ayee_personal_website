import {combineReducers} from 'redux'
import boilerplate from './boilerplate/boilerplate-reducer'
import content from './content'
import filters from './filters/filters-reducer'
import dynamoData from './dynamoData'

export default combineReducers({boilerplate, content, filters, dynamoData})
