import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 

import Header from '../../components/Header'
import './style.less'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username : ''
        }
    }
    componentDidMount() {
        if(this.props.userinfo.username != null) {
            hashHistory.push('/user')
        }

    }
    setUserName(e) {
        this.setState({
            username : e.target.value
        })
        
    }
    login() {
        // this.props.userInfoActions.update({
        //     username : this.state.username
        // })
        // hashHistory.push('/user')

        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = this.state.username
        actions.update(userinfo)
        hashHistory.push('/user')
        // console.log(userinfo);
        // console.log(this.props.userinfo);


    }
    render() {
        return (
            <div>
                <Header title='登录' />
                <input className="login-input" value={this.state.username} onChange={this.setUserName.bind(this)}/>
                <button className="login-button" onClick={this.login.bind(this)}>登录</button>
            </div>
        )
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
)(Login)