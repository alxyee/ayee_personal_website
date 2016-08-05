import {connect} from 'react-redux'
import React from 'react'
import cx from 'classnames'
import * as FilterActions from '../../pages/reducers/filters/filters-actions'

import './filters.scss'
class FiltersView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {filterName, isSelected, updateFilter} = this.props
        return (
            <button className={cx("filter-btn", {"active": isSelected})}
                    onClick={()=>{updateFilter()}}>{filterName.toUpperCase()}</button>
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