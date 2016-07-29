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
import Layout from '../../components/Layout';
import './styles.scss'
import {connect} from 'react-redux'

import Card from '../../components/card'


class HomePageView extends React.Component {
    render() {
        const {projects} = this.props
        return (
            <Layout>
                <div className="mdl-grid home-container">
                    {
                        projects.map((project, idx)=>
                            <Card
                                key={idx}
                                className={"mdl-cell mdl-cell--4-col med-cell--6-col-tablet"}
                                title={project.get('name')}
                                picture={project.get('picture_url')}
                                video = {project.get('video')}
                                tagline = {project.get('tagline')}
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
