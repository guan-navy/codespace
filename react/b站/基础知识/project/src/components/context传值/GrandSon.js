import React, { Component } from 'react'
import { Context1 } from '../../App'
export default class GrandSon extends Component {
    render() {
        return (
            <><div>孙子组件</div><Context1.Consumer>
                {(value) => {
                    return <div>{value}</div>
                }}
            </Context1.Consumer></>
        )
    }
}
