/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import {title, html} from './index.md';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = title;
    }

    render() {
        console.log(this.props)
        return (
            <Layout className={s.content}>
                <div style ={{width: '100%', maxWidth: '1000px', margin:'0 auto', textAlign: 'center'}}>
                    <p>Custom routing without having to create multiple S3 buckets to hold the pages</p>
                </div>
            </Layout>
        );
    }

}

export default AboutPage;
