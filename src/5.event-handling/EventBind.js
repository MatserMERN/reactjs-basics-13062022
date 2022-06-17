import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: "Hello"
        }
        // 3rd Approach
        //this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message : "Thank you"
    //     })
    // }

    
    changeMessage = () =>{
        console.log(this)
        this.setState({
            message : "Thank you"
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button className="btn btn-primary" onClick={this.changeMessage}>Click Me</button> */}

        {/* 1st Approach*/}
        {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Click Me</button> */}

        {/* 2nd Approach*/}
        {/* <button className="btn btn-primary" onClick={() =>this.changeMessage()}>Click Me</button> */}

        {/* 3rd Approach*/}
        {/* <button className="btn btn-primary" onClick={this.changeMessage}>Click Me</button> */}

        {/* 4th Approach*/}
        <button className="btn btn-primary" onClick={this.changeMessage}>Click Me</button>        

      </div>
    )
  }
}

export default EventBind