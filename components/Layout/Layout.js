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
import cx from 'classnames';
import Slideout from 'slideout'
import Profile from '../profile'
import './layout.scss'
class Layout extends React.Component {

    static propTypes = {
        className: PropTypes.string,
    };

    componentDidMount() {
        window.componentHandler.upgradeElement(this.root);
        const slideout = new Slideout(
            {
                'panel': document.getElementById('panel'),
                'menu': document.getElementById('menu'),
                'padding': 256,
                'tolerance': 70
            }
        )
        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function () {
            slideout.toggle();
        });
    }

    componentWillUnmount() {
        window.componentHandler.downgradeElements(this.root);
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
                <div className="mdl-layout__inner-container">
                    <nav id="menu">
                        <Profile/>
                    </nav>
                    <main id="panel" className="mdl-layout__content page-container">
                        <button
                            style={{position: 'absolute', zIndex: '10', left: '20px', top: '20px'}}
                            className="toggle-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored profile-btn">
                            <i className="material-icons" style={{color:'white'}}>dehaze</i>
                        </button>

                        {
                            /*
                             <div className="hero-banner"></div>
                             */
                        }



                        <div {...this.props} className={cx(this.props.className)}/>
                    </main>
                </div>
            </div>
        );
    }
}

export default Layout;
