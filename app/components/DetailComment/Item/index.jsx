import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        return (
            <div className="detail-comment">
                <div>{data.username}</div>
                <div>{data.comment}</div>
                <div>{data.star}</div>
            </div>
        )
    }
}

export default Item