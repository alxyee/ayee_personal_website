import {connect} from 'react-redux'
import React from 'react'
import './profile.scss'
const ListItem = (props) => {
    return (
        <li className="mdl-list__item mdl-list__item--three-line">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">person</i>
      <span>Bryan Cranston</span>
      <span className="mdl-list__item-text-body">
        Bryan Cranston played the role of Walter in Breaking Bad. He is also known
        for playing Hal in Malcom in the Middle.
      </span>
    </span>
    <span className="mdl-list__item-secondary-content">
      <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
    </span>
        </li>
    )
}

class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ul className="demo-list-three mdl-list">
                    <ListItem/>
                    <ListItem/>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const Profile = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileView)

export default Profile