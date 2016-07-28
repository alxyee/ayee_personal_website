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

import SquareCard from '../../components/square-card'
import RectangleCard from '../../components/rectangle-card'


class HomePageView extends React.Component {
    render() {
        return (
            <Layout>
                <div className = "mdl-grid home-container">
                    <SquareCard className = {"mdl-cell mdl-cell--4-col med-cell--6-col-tablet"}/>
                    <SquareCard className = {"mdl-cell mdl-cell--4-col med-cell--6-col-tablet"}/>
                    <RectangleCard/>
                </div>
            </Layout>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {}
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
