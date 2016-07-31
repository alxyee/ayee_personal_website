import React from 'react'
import cx from 'classnames'
import './card.scss'

import {Tooltip} from 'react-mdl'

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    _displayPrize(prize) {
        return (
            <Tooltip className={"prize-tooltip"}
                     label={<span className = "is-active">{prize}</span>}
                     position={'right'}
                     children={<i className="material-icons" style={{fontSize: '30px', color:'rgb(255, 235, 59)'}}>star</i>}
                     large={true}/>
        )
    }

    _seeMore(url) {
        return (
            <div className="mdl-card__actions mdl-card--border">
                <a href={url} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Explore
                </a>
            </div>
        )
    }

    _showVideo(video) {
        return (
            <div className="mdl-card__title mdl-card--expand">
                <iframe src={`https://www.youtube.com/embed/${video}`} className={"iframe-video"}/>
            </div>
        )
    }

    render() {
        const {title, description, tagline, picture, prize, url, video} = this.props
        return (
            <div className={cx(this.props.className, "mdl-card mdl-shadow--4dp", "card")}>
                {video ? this._showVideo(video) : (
                    <div className="mdl-card__title mdl-card--expand"
                         style={{background: `url('${picture}') center no-repeat`}}>
                        <div className="fuzzy-cover">
                            <h2 className="mdl-card__title-text">{title}</h2>
                            {prize ? this._displayPrize(prize) : []}
                        </div>
                    </div>
                )}

                <div className="mdl-card__supporting-text">
                    <h6><i>{tagline}</i></h6>
                    {description}
                </div>
                {url ? this._seeMore(url) : []}
            </div>
        )
    }
}

export default Card