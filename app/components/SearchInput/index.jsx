import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Link } from 'react-router'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <input className="search-input" 
                type="text" 
                placeholder="请输入关键字"
                value = {this.state.value}
                onChange = {this.handleChange.bind(this)}
                onKeyUp = {this.handleKeyUp.bind(this)}
            />
        )
    }

    componentDidMount() {
        // 默认值
        this.setState({
            value: this.props.value || ''
        })
    }

    handleChange(e) {
        this.setState({
            value : e.target.value
        })
    }

    handleKeyUp(e) {
        if(e.keyCode == 13) {
            this.props.enterHandle(this.state.value);
        }

    }
}

export default SearchInput