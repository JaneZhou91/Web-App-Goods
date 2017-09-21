import React from 'react';

class List extends React.Component {
	delete(index) {
		this.props.delete(index);
	}

	render() {
		return (
			<div>
				<ul>
	            	{	
	            		this.props.toDoList.map((item,index) => {
	            			return <li key={index} onClick={this.delete.bind(this,index)}>{item}</li>
	            		})
	            	}
            	</ul>
            </div>
		)
	}

}

export default List;