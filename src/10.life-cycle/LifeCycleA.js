import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(){
        super()

        this.state = {

        }

        console.log('constructor of LifeCycleA')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of LifeCycleA')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of LifeCycleA')
    }
  render() {
    console.log('render of LifeCycleA')
    return (
      <div>
         <h1>Licecycle A</h1>
         <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA