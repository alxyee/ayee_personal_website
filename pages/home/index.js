/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react';
import cx from 'classnames'
import Layout from '../../components/Layout';
import './styles.scss'
import {connect} from 'react-redux'

import Card from '../../components/card'


class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={cx("mdl-cell",
            "mdl-cell--8-col-phone",
            "mdl-cell--8-col-tablet",
            "mdl-cell--8-col-desktop")}
                 style={{display: 'flex'}}>
                <div className={cx("demo-card-square mdl-card mdl-shadow--2dp", "card", "introduction-card")}
                     style={{width: '100%'}}>
                    <h3>Hi! I'm Alex Yee</h3>
                    <p>Currently, a <b>software engineer</b> at Lyra Health, a mental health startup. <br/>
                    </p>
                    <p>
                        Over the years, I've been fortunate enough to be
                        able to work on a wide variety of interesting projects with many great interdisciplinary teams -
                        spanning software, hardware, and health.
                    </p>
                    <p>
                        A little bit about my journey: I'm a firm believer that you should never stop
                        learning and working a little by little each day can really add up to a lot! Here are some of my
                        most recent projects:
                    </p>
                </div>
            </div>
        )
    }
}
class SkillsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={cx("mdl-cell",
            "mdl-cell--4-col-phone",
            "mdl-cell--4-col-tablet",
            "mdl-cell--4-col-desktop")}
                 style={{display: 'flex'}}>
                <div
                    className={cx("demo-card-square mdl-card mdl-shadow--2dp", "card", "introduction-card", "skills-card")}
                    style={{width: '100%'}}>
                    <h3>
                        Skills
                    </h3>
                    <ul style={{listStyle: "none"}}>
                        {
                            [
                                "ReactJS/Redux (ES6)",
                                "Webpack",
                                "Websockets",
                                "ElasticSearch",
                                "AWS (Lambda, Elastic Beanstalk, S3, API Gateway)",
                                "Node.js"
                            ].map(skill =>
                                <li>{skill}</li>)
                        }
                    </ul>

                </div>
            </div>
        )
    }
}

class HomePageView extends React.Component {
    render() {
        const {projects} = this.props
        return (
            <Layout>
                <div className="mdl-grid home-container">
                    <Introduction/>
                    <SkillsView/>
                    {
                        projects.map((project, idx)=>
                            <Card
                                key={idx}
                                className={"mdl-cell mdl-cell--4-col med-cell--6-col-tablet"}
                                title={project.get('name')}
                                picture={project.get('picture_url')}
                                video={project.get('video')}
                                tagline={project.get('tagline')}
                                description={project.get('description')}
                                prize={project.get('prize')}
                                url={project.get('url')}
                            />
                        )
                    }
                </div>
            </Layout>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        projects: state.content
            .getIn(['projects'])
        // .filter(project=>project.get('type') === 'hackathon')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const HomePage =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomePageView)

export default HomePage;
