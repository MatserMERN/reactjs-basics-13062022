import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(){
        super()

        this.state = {

        }

        console.log('constructor of LifeCycleB')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of LifeCycleB')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of LifeCycleB')
    }
  render() {
    console.log('render of LifeCycleB')
    return (
      <div>
        <h1>Licecycle B</h1>
      </div>
    )
  }
}

export default LifeCycleB