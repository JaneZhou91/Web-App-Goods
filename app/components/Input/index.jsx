import React from 'react';

class Input extends React.Component {

	constructor(props, context) { 
		super(props, context); 
		this.state = {
			value : ''
		}
	}

	putValue(e){
		var value = this.state.value;
		if(e.keyCode == 13 && value.trim()) {
			this.props.putValue(value);
			this.setState({
				value : ''
			})
		}
	}

	setValue(e) {
		this.setState({
			value : e.target.value
		})	
	}

	render() {
		return (
			<div>
				<input type='text' value={this.state.value} 
				onKeyUp={this.putValue.bind(this)} onChange={this.setValue.bind(this)}/>
			</div>
		)
	}

}

export default Input;