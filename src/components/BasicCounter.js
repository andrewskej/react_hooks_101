import React, { Component } from 'react'

class Item{
    constructor(id){
        this.id = id ? id : 0
    }
    getId(){
        return this.id
    }
    setId(id){
        this.id = id
        return this;
    }
}
export default class BasicCounter extends Component {

    state={
        list:[
           
        ],
    }


    add = () => {
        const newList = [...this.state.list]
        const newItem = new Item()
        newList.length ? newList.push(newItem.setId(newList[newList.length-1].id+1)) : newList.push(newItem)

        this.setState({list:newList})
    }

    remove = (index) => {
        const {list} = this.state
        const newList = [...list.slice(0, index), ...list.slice(index+1, list.length)]
        this.setState({list:newList})
    }

    render() {
        const {list} = this.state

        return (
            <div style={{marginBottom:'5%'}}>
                <button onClick={()=>this.add()}>add new</button>
                <div>
                {
                    list.length 
                        ? list.map((item, index) => 
                            <li key={item.id}>
                                {item.id}
                                <button onClick={()=>this.remove(index)}>x</button>
                            </li>
                        )
                        : <div>the list is empty</div>
                }                
                </div>
            </div>
        )
    }
}
