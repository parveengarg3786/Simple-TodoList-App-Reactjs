import React, { Component } from 'react';
import './todo.css'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            task:'',
            list:[],
        }

    }

    task = (event) => {
        this.setState({
            task:event.target.value
        });
    }

    Submit = (event) =>{

       
        const data = {
            task:this.state.task,
        }

        const array = [...this.state.list];

        array.push(data);

        this.setState({
            list:array,
        });

        event.preventDefault();
    }

    delete = (event) =>{
        const array = [...this.state.list];

        console.log(event);

        const a= array.filter((items, index) => {
            return index !== event
          })
          this.setState({ list:a })
    }

    render(){
        const list = this.state.list
        return(
            <div className="container">
                <h1 className="heading">Todo list</h1>
                <div>
                    <form onSubmit={this.Submit}>
                    <input type='text' value={this.state.task} placeholder="Enter the Task ......" onChange={this.task} />
                    <button>Add</button>
                    </form>
                </div>
                <table>
                    <tbody>
                    {list.map((item,index) =>
                     <tr key={index} className="task"> 
                    
                  <td className='data'> <h3>{index+1}</h3></td>
                    <td className='data1'><h3>{item.task}</h3></td>
                    <td className='data2'><h3><button name="removeTask" className="remove" onClick={event=>this.delete(index)}>Remove</button></h3></td> 
                     </tr>)}
                     </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList;