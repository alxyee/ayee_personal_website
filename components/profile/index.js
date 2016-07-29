import {connect} from 'react-redux'
import React from 'react'
import './profile.scss'
const ListItem = (props) => {
    const {icon, title, subtitle} = props
    return (
        <li className="mdl-list__item profile-list-item mdl-list__item--three-line">
    <span className="mdl-list__item-primary-content" style = {{verticalAlign: 'bottom'}}>
        {icon}
        {title}
        <br/>
      <span className="mdl-list__item-text-body">
          {subtitle}
      </span>
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
        const {schoolProps} = this.props
        return (
            <div>
                <ul className="demo-list-three mdl-list">
                    {
                        schoolProps
                            .map(school=><ListItem
                                icon={<img className = {"mdl-list__item-icon school-icon"} src = {school.get('icon')}/>}
                                title={school.get('name')}
                                subtitle={
                                `${school.get('degree')}  ${school.get('major')}  ${school.get('end_date')}`
                                }
                            />)
                    }
                    <li style ={{textAlign: 'center'}}><i style = {{fontSize: '40px'}} className="fa fa-github" aria-hidden="true"></i></li>
                    <li style ={{textAlign: 'center'}}><i style = {{fontSize: '40px'}} className="fa fa-linkedin" aria-hidden="true"></i></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        schoolProps: state.content.getIn(['education', 'schools'], [])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const Profile = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileView)

export default Profile