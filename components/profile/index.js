import {connect} from 'react-redux'
import React from 'react'
import './profile.scss'
const ListItem = (props) => {
    const {icon, title, subtitle} = props
    return (
        <li className="mdl-list__item profile-list-item mdl-list__item--three-line">
    <span className="mdl-list__item-primary-content" style={{verticalAlign: 'bottom'}}>
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

const SocialLink = (props) => {
    const {onClick, label, icon} = props
    return (
        <li className="social-links" onClick={onClick}>
            <i
                className={`fa fa-${icon}`}
                aria-hidden="true"></i>
            <span style={{verticalAlign: 'bottom'}}>
            {label}
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
                    <section className="menu-section">
                        <h3 className="menu-section-title">About Me</h3>
                        <header className="menu-header">
                            <img src={"https://s3-us-west-2.amazonaws.com/ayeepersonalwebsite/images/profile.png"}/>
                            <h4>
                                Alex Yee
                            </h4>
                            <p>Software Engineer at Lyra Health</p>
                        </header>
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
                    </section>
                    <section className="menu-section">
                        <h3 className="menu-section-title">Links</h3>
                        <SocialLink
                            onClick = {()=>{window.location.href = "https://github.com/alxyee"}}
                            icon="github"
                            label="Github"
                        />
                        <SocialLink
                            onClick = {()=>{window.location.href = "https://www.linkedin.com/in/alexyee1"}}
                            icon="linkedin"
                            label="Linkedin"
                        />
                        <SocialLink
                            onClick = {()=>{window.location.href = "mailto:alxyee1@gmail.com";}}
                            icon="envelope"
                            label="Email"
                        />
                    </section>
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