import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 

import Header from '../../components/Header'
import './style.less'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title={'个人中心'}/>
                欢迎 -- {this.props.userinfo.username} 
                <div>您现在在 -- {this.props.userinfo.cityName}</div>
                <a onClick={this.goBack.bind(this)} style={{color:'red'}}>返回首页</a>
            </div>
        )
    }
    goBack() {
        hashHistory.push('/')
    }

}

function mapStateToProps(state) {
    return {
        userinfo : state.userinfo 
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions : bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)