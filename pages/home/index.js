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
import s from './styles.css';
import {connect} from 'react-redux'

import SquareCard from '../../components/square-card'


class HomePageView extends React.Component {

    render() {
        return (
            <Layout className={s.content}>
                <SquareCard/>
                <h1>Alex's website under construction! Proposed serverless architecture:</h1>
                <img style={{width: '800px', height: '400px'}}
                     src="https://s3-us-west-2.amazonaws.com/ayeepersonalwebsite/images/personalwebsitearchitecture.png"></img>
            </Layout>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buttonWasClicked: () => {

        }
    }
}

const HomePage =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomePageView)

export default HomePage;
