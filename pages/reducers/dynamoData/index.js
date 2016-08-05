import {fromJS} from 'immutable'

export const ADD_DATA_TO_DYNAMO_DATA = 'ADD_DATA_TO_DYNAMO_DATA'
export const addDataToDynamoData = (data) =>({type: 'ADD_DATA_TO_DYNAMO_DATA', data})


function dynamoData(state = fromJS({'data': []}), action = null) {
    switch (action.type) {
        case ADD_DATA_TO_DYNAMO_DATA:
            return state.set('data', action.data)
        default:
            return state
    }
}

export default dynamoData
