import * as FilterActions from './filters-actions'
import {fromJS} from 'immutable'
function filters(state = fromJS({}), action = null) {
    switch (action.type) {
        case FilterActions.UPDATE_FILTER:
            const isSelected = state.getIn([action.filterName, 'isSelected'], "")
            if(isSelected !== ""){
                return state.setIn([action.filterName, 'isSelected'], !isSelected)
            }
            return state.setIn([action.filterName, 'isSelected'], true)
        default:
            return state
    }
}

export default filters
