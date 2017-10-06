import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getDetailComment } from '../../../fetch/detail/detail.js';
import DetailComment from '../../../components/DetailComment/index.jsx'


class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = ({
            comment : ''
        })
    }

    componentDidMount() {
        const result = getDetailComment(this.props.id,1);
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json
            this.setState({
                comment: data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.comment != '' ? <DetailComment comment={this.state.comment} /> : '加载中...'}
                
            </div>
        )
    }

}

module.exports = Comment