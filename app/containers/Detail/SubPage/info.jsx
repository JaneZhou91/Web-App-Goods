import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getDetailInfo } from '../../../fetch/detail/detail.js';
import DetailInfo from '../../../components/DetailInfo/index.jsx'


class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = ({
            info : ''
        })
    }

    componentDidMount() {
        const result = getDetailInfo(this.props.id);
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json
            this.setState({
                info: data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.info != '' ? <DetailInfo info={this.state.info} /> : '加载中...'}
                
            </div>
        )
    }

}

module.exports = Info