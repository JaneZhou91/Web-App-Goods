import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <h2>热门城市</h2>
                <div className="cityItem" onClick={this.updateCity.bind(this,"北京")}>北京</div>
                <div className="cityItem" onClick={this.updateCity.bind(this,"上海")}>上海</div>
                <div className="cityItem" onClick={this.updateCity.bind(this,"深圳")}>深圳</div>
                <div className="cityItem" onClick={this.updateCity.bind(this,"广州")}>广州</div>
            </div>
        )
    }

    updateCity(cityName) {
        this.props.changeCity(cityName);
    }
}

export default HomeAd