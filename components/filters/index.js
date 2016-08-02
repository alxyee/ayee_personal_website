import {connect} from 'react-redux'
import React from 'react'
import * as FilterActions from '../../pages/reducers/filters/filters-actions'

class FiltersView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {filterName, isSelected, updateFilter} = this.props
        return (
            <div>
                <button onClick = {()=>{updateFilter()}} style = {isSelected? {backgroundColor: 'blue'}: {}}>{filterName}</button>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isSelected: state.filters.getIn([ownProps.filterName, 'isSelected']) === true
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateFilter: ()=> {
            dispatch(FilterActions.updateFilter(ownProps.filterName))
        }
    }
}

const FiltersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersView)

export default FiltersContainer