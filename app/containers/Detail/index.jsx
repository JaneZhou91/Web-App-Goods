import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './SubPage/info.jsx';
import Comment from './SubPage/comment.jsx';


class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }


    render() {
        const id = this.props.params.id;
        return (
            <div>
                <Header title={'商户详情'} />
                <Info id={id}/>
                <Comment id={id} />
            </div>
        )
    }

}

module.exports = Detail