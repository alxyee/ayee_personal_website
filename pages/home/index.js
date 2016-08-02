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
import FilterContainer from '../../components/filters'


class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={cx("mdl-cell",
            "mdl-cell--12-col-phone",
            "mdl-cell--12-col-tablet",
            "mdl-cell--12-col-desktop")}
                 style={{display: 'flex'}}>
                <div className={cx("demo-card-square mdl-card mdl-shadow--2dp", "card", "introduction-card")}
                     style={{width: '100%'}}>
                    <h3>Hi! I'm Alex Yee</h3>
                    <p>Currently, a <b>software engineer</b> at Lyra Health, a mental health startup. <br/>
                    </p>
                </div>
            </div>
        )
    }
}
class ProjectIntroduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={cx("mdl-cell",
            "mdl-cell--12-col-phone",
            "mdl-cell--12-col-tablet",
            "mdl-cell--12-col-desktop")}
                 style={{display: 'flex'}}>
                <div className={cx("demo-card-square mdl-card mdl-shadow--2dp", "card", "introduction-card")}
                     style={{width: '100%'}}>
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
        const {title, skillList} = this.props
        return (
            <div className={cx("mdl-cell",
            "mdl-cell--6-col-phone",
            "mdl-cell--6-col-tablet",
            "mdl-cell--6-col-desktop")}
                 style={{display: 'flex'}}
            >
                <div
                    className={cx("demo-card-square mdl-card mdl-shadow--2dp", "card", "introduction-card", "skills-card")}
                    style={{width: '100%'}}>
                    <h3>
                        {title}
                    </h3>
                    <ul style={{listStyle: "none"}}>
                        {
                            skillList.map(skill =>
                                <li>{skill}</li>)
                        }
                    </ul>

                </div>
            </div>
        )
    }
}

class EmploymentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {title, subtitle, description} = this.props
        return (
            <div className={cx("mdl-cell",
            "mdl-cell--12-col-phone",
            "mdl-cell--12-col-tablet",
            "mdl-cell--12-col-desktop")}
                 style={{display: 'flex'}}>
                <div
                    className={cx("demo-card-square mdl-card mdl-shadow--2dp", "card", "introduction-card", "skills-card")}
                    style={{width: '100%'}}>
                    <h3>
                        {title}
                    </h3>
                    <h4>
                        {subtitle}
                    </h4>

                    {description}

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

                    <SkillsView
                        title={"Recently Used Skills"}
                        skillList={[
            "ReactJS/Redux (ES6)",
            "Webpack",
            "Websockets",
            "ElasticSearch",
            "AWS (Lambda, Elastic Beanstalk, S3, API Gateway)",
            "Node.js"
        ]}
                    />

                    <SkillsView
                        title={"Other Interests"}
                        skillList={[
            "Arduino",
            "CAD",
            "3D printing",
            "Embedded Systems",
            "Bluetooth Low Energy",
            "Wearables",
            "Data visualization",
            "Matlab"
        ]}
                    />
                    <EmploymentView
                        title={"Lyra Health (mental health startup)"}
                        subtitle={"Software Engineer"}
                        description={<div>
            <p>
                Responsive mobile web app that helps identify people who can benefit from mental health care and
                connecting them to the right providers and treatments based on their needs and preferences
            </p>
            <p>
                Skills used: React (ES6), Redux, React Router (SPA), ImmutableJS, SCSS, Webpack, AWS, Google APIs
                (map/places), Mixpanel
            </p>
        </div>}
                    />

                    <EmploymentView
                        title={"Theranova (medical device startup)"}
                        subtitle={"Principal Engineer"}
                        description={<div>
            <p>
                Smart Urinary Catheter combining real time streams of data including Respiratory Rate, Heart Rate,
                Tempature, Urine Output to enable potential early detection of sepsis.
            </p>
            <p>
                Skills used: Embedded C, 3D printing, Solidworks, Arduino, Matlab, Labview
            </p>
        </div>}
                    />
                    <ProjectIntroduction/>
                    <FilterContainer
                        filterName={"software"}/>
                    <FilterContainer
                        filterName={"hardware"}/>
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
    const filters = state.filters
    return {
        projects: state.content
            .getIn(['projects'])
            .filter(project=> {

                if(filters.size === 0){
                    return true
                }
                const shouldTestFilters = filters.reduce((currVal, obj)=> {
                    return currVal || obj.get('isSelected')
                }, false)

                if(!shouldTestFilters){
                    return true
                }
                console.log("shouldTestFilters", shouldTestFilters)


                return filters.reduce((currVal, obj, name)=> {
                    if(!obj.get('isSelected')){
                        return currVal
                    }
                    return (obj.get('isSelected') && project.get('tags').includes(name))
                }, false)
            })
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
