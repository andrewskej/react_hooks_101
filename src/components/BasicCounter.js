import React, { Component } from 'react'

export default class BasicCounter extends Component {

    state={
        list:[
           
        ]
    }


    add = () => {
        const {list} = this.state
        const lastNum = list[list.length-1]
        const newList = [...list, lastNum ? lastNum +1 : list.length]
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
            <div>
                <button onClick={()=>this.add()}>add new</button>
                <div>
                {
                    list.length 
                        ? list.map((item, i) => 
                            <li key={i}>
                                {item}
                                <button onClick={()=>this.remove(i)}>x</button>
                            </li>
                        )
                        : <div>the list is empty</div>
                }                
                </div>
            </div>
        )
    }
}
