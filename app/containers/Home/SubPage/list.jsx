import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import ListItem from '../../../components/List/index.jsx'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	hasMore : false, 
        	data : []
        }
    }

    componentDidMount() {
    	const result = getListData('beijing', 0);
    	result.then((res) => {
    		return res.json()
    	}).then((json)=>{
    		this.setState({
    			hasMore:json.hasMore,
    			data : json.data
    		})
    	})

    }

    render() {
        return (
        	<div>
	            <div>猜你喜欢</div>
	            {this.state.data ? <ListItem data = {this.state.data}/> : <div>加载中...</div>}
	            
            </div>

        )
    }
}

export default List