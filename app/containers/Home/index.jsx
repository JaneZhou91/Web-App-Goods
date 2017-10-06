import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './SubPage/ad.jsx'
import List from './SubPage/list.jsx'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName} username={this.props.userinfo.username}/>
                <Category/>
                <div style={{height:'20px'}}></div>
                <Ad />
                <List />
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
)(Home)

