import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class DetailComment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.comment;
        const commentList = data.data;
        // console.log(commentList);
        return (
            <div className="detail-comment">
            {
                commentList.map((item,index) => {
                    return <Item key={index} data={item}/>
                })
            }
            </div>
        )
    }
}

export default DetailComment