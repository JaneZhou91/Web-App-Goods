import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

// import Item from './Item'

import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.info;
        return (
            <div className="detail-info">
                <img src={data.img} className="img-position"/>
                <div>{data.title}</div>
                <div>{data.subTitle}</div>
                <div>star:{data.star}</div>
                <div>{data.price}</div>
                <div>{data.desc}</div>
            </div>
        )
    }
}

export default DetailInfo