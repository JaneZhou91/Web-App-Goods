import React from 'react';
import Input from '../../components/Input';
import List from '../../components/List';

class ToDo extends React.Component {
	constructor(props, context) { 
		super(props, context); 
		this.state = {
			toDoList : []
		}
	}

	putValue(value) {
		this.setState({
			toDoList: this.state.toDoList.concat(value)
		})
	}



	delete(index) {
		var arr = this.state.toDoList;
		arr = arr.filter((item, key) => {
			return key != index;
		})
		this.setState({
			toDoList : arr
		})

	}

    render() {
        return (
        	<div>
	            <p>TO Do List</p>
	            <Input putValue={this.putValue.bind(this)}/>
	            <p>------------list-----------</p>
	            <List toDoList={this.state.toDoList} delete={this.delete.bind(this)}/>
	            
            </div>
        )
    }
}


export default ToDo;