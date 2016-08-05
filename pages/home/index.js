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
import {fromJS} from 'immutable'

import Card from '../../components/card'
import FilterContainer from '../../components/filters'

import * as DynamoDataActions from '../reducers/dynamoData'
import axios from 'axios'

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
                    <p>I'm currently a <b>software engineer</b> at Lyra Health, a mental health startup. <br/>
                    </p>
                    <p>
                        I really enjoy learning about new technologies and applying them to various projects.
                        Here are some skills that I actively use:<br/>
                        ReactJS/Redux (ES6), webpack, websockets, ElasticSearch,
                        AWS (Lambda, Elastic Beanstalk, S3, API Gateway, IAM, etc.), Node.js, and Swift
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
                        Over the years, I've been fortunate to have been
                        able to work on a wide variety of interesting projects with many great interdisciplinary teams -
                        spanning software, hardware, and health. Filter by the tags below to see some of my most recent projects:
                    </p>


                    <div className={"filter-btn-container"}>
                        <FilterContainer
                            filterName={"software"}/>
                        <FilterContainer
                            filterName={"hardware"}/>
                        <FilterContainer
                            filterName={"hackathon"}/>
                        <FilterContainer
                            filterName={"bluetooth"}/>
                        <FilterContainer
                            filterName={"arduino"}/>
                    </div>
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
            "mdl-cell--12-col-phone",
            "mdl-cell--12-col-tablet",
            "mdl-cell--12-col-desktop")}
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
        const {title, subtitle, description, img_url, id, little_title} = this.props
        return (
            <div className={cx("mdl-cell",
            "mdl-cell--12-col-phone",
            "mdl-cell--6-col-tablet",
            "mdl-cell--6-col-desktop")}
                 style={{display: 'flex', cursor:'pointer'}}>
                <div
                    className={cx("flip-container")}>
                    <div className={cx( "card", "flipper")}>
                        <div className="front mdl-shadow--2dp">
                            <img src={img_url} style={{width:'100%', height: 'auto'}}></img>
                        </div>
                        <div className={cx("back mdl-shadow--2dp", id)}>
                            <div className={"back-container"} style={{padding:'20px'}}>
                                <h3>
                                    {subtitle}
                                </h3>
                                <h4>
                                    {title}
                                </h4>
                                {little_title.toUpperCase()}:{description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ArchitectureView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {dynamoData} = this.props
        return (
            <div className={"mdl-cell mdl-cell--12-col med-cell--12-col-tablet architecture-view"}>
                <img
                    src="https://s3-us-west-2.amazonaws.com/ayeepersonalwebsite/images/personalwebsitearchitecture.png"/>
                <h3>
                    www.alxyee.com Serverless Architecture
                </h3>
                <p>
                    Frontend:
                    <br/>
                    React/Redux (ES6) and
                    SCSS. Webpack for bundling JS/HTML/CSS files as well as hot-module loading for development.
                    SPA routing is handled in JS.
                </p>
                <p>
                    AWS:
                    <br/>
                    Route 53 - hosting www.alxyee.com
                    <br/>
                    S3 - storage for this website using static website hosting
                    <br/>
                    Cloudfront - CDN pointing to S3 and handling page routes by allowing ReactJS to handle routing
                    <br/>
                    API Gateway - RESTful APIs to trigger Lambda Functions
                    <br/>
                    Lambda - serverless on demand functions to send email as well as fetching data from a
                    DynamoDB
                    database
                    <br/>
                </p>
                <div className="filter-btn-container">
                    <button className={cx("filter-btn")} disabled={dynamoData.size >0}
                            onClick={()=>{this.props.callLambdaFunction()}}>
                        Call Lambda Function!
                    </button>
                </div>
                {dynamoData.map(data=><div style={{padding: '40px', margin: '10px', width: '40%', display: 'inline-block'}}
                                           className="mdl-shadow--2dp">{data.get('description')}</div>)}
                <p>
                    Super useful links:
                    <br/>
                    <a href="http://www.bebetterdeveloper.com/coding/architecture/serverless-system-architecture-using-aws.html">
                        Serverless System Architecture Using AWS
                    </a>
                    <br/>
                    <a href="https://github.com/awslabs/lambda-refarch-webapp"> Lambda Refarch Webapp</a>
                    <br/>
                    <a href="https://github.com/kriasoft/react-static-boilerplate">
                        React Static Boilerplate
                    </a>
                </p>
            </div>
        )
    }
}

class HomePageView extends React.Component {
    render() {
        const {projects, dynamoData} = this.props
        return (
            <Layout>
                <div className="mdl-grid home-container">
                    <Introduction/>

                    <EmploymentView
                        id={"lyra"}
                        title={"Lyra Health"}
                        little_title = {"mental health startup"}
                        subtitle={"Software Engineer"}
                        img_url={"https://s3-us-west-2.amazonaws.com/ayeepersonalwebsite/images/lyra.png"}
                        description={<div>
            <p>
                Responsive mobile web app that helps identify people who can benefit from mental health care and
                connecting them to the right providers and treatments based on their needs and preferences
            </p>
            SKILLS USED:
            <p>
                React (ES6), Redux, React Router (SPA), ImmutableJS, SCSS, Webpack, AWS, Google APIs
                (map/places), Mixpanel
            </p>
        </div>}
                    />

                    <EmploymentView
                        id={"theranova"}
                        little_title = {"medical device startup"}
                        title={"Theranova"}
                        subtitle={"Principal Engineer"}
                        img_url={"https://s3-us-west-2.amazonaws.com/ayeepersonalwebsite/images/theranova.png"}
                        description={<div>
            <p>
                Smart Urinary Catheter combining real time streams of data including Respiratory Rate, Heart Rate,
                Tempature, Urine Output to enable potential early detection of sepsis.
            </p>
            SKILLS USED:
            <p>
                Embedded C, 3D printing, Solidworks, Arduino, Matlab, Labview
            </p>
        </div>}
                    />
                    <ProjectIntroduction/>

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
                                hackathon_title={project.get('hackathon_title', '')}
                                url={project.get('url')}
                            />
                        )
                    }
                    <ArchitectureView {...this.props}/>

                </div>
            </Layout>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    const filters = state.filters
    return {
        dynamoData: state.dynamoData.get('data'),
        projects: state.content
            .getIn(['projects'])
            .filter(project=> {

                if (filters.size === 0) {
                    return true
                }
                const shouldTestFilters = filters.reduce((currVal, obj)=> {
                    return currVal || obj.get('isSelected')
                }, false)

                if (!shouldTestFilters) {
                    return true
                }
                console.log("shouldTestFilters", shouldTestFilters)


                return filters.reduce((currVal, obj, name)=> {
                    if (!obj.get('isSelected')) {
                        return currVal
                    }
                    return (obj.get('isSelected') && project.get('tags').includes(name))
                }, false)
            })
        // .filter(project=>project.get('type') === 'hackathon')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callLambdaFunction: ()=> {
            axios.get('https://l0sbuq9328.execute-api.us-west-2.amazonaws.com/prod/project')
                .then(response=> {
                    dispatch(DynamoDataActions.addDataToDynamoData(fromJS(response.data.Item.cards)))
                })
        }
    }
}

const HomePage =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomePageView)

export default HomePage;


/*----------------------------------------------------------------
 UNUSED
 ---------------------------------------------------------------*/
// <SkillsView
//     title={"Recently Used Skills"}
//     skillList={[
//                          "ReactJS/Redux (ES6)",
//                          "Webpack",
//                          "Websockets",
//                          "ElasticSearch",
//                          "AWS (Lambda, Elastic Beanstalk, S3, API Gateway)",
//                          "Node.js"
//                          ]}
// />
// <SkillsView
//     title={"Other Interests"}
//     skillList={[
//             "Arduino",
//             "CAD",
//             "3D printing",
//             "Embedded Systems",
//             "Bluetooth Low Energy",
//             "Wearables",
//             "Data visualization",
//             "Matlab"
//         ]}
// />