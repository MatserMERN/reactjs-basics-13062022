import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('Button is clicked - class')
    }
  render() {
    return (
      <div>
        <button className="btn btn-primary"
                onClick={this.clickHandler}
        >
        Class Click
        </button>
      </div>
    )
  }
}

export default ClassClick