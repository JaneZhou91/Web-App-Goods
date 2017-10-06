import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }

    changeCity(newCity) {
        // this.props.userInfoActions.update({
        //     cityName: newCity
        // })

        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.cityName = newCity
        actions.update(userinfo)

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)

        // 跳转页面
        hashHistory.push('/')
    }

    componentDidMount() {

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
)(City)


