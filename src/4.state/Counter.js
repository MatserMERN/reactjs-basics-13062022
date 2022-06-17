import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()

        this.state = {
            count: 0,
            message: "Count"
        }
    }

    addCount(){
        //this.state.count = this.state.count + 1
        this.setState({
            count : this.state.count + 1,
            message: " Increment"
        }, () => console.log(this.state.count))
        
    }


  render() {
    console.log("render is called ", this.state.count)
    return (
      <div>
        <h1>{this.state.message} : {this.state.count}</h1>
        <button className="btn btn-primary"
                onClick={() => this.addCount()}
        >Add Count</button>
      </div>
    )
  }
}

export default Counter