import React from "react"
import ReactDom from "react-dom"
import {Router, browserHistory} from "react-router"

import AppRouter from "../AppRouter/index"

const RenderForcer = React.createClass({
  // componentWillMount() {
  //   // a little hack to help us rerender when this module is reloaded
  //   // this.forceUpdate()
  // },
  render() {
    return <div>
      <Router history={browserHistory}>
        {AppRouter}
      </Router>
    </div>
  }
})

import {module} from "@hot"
export const _state = module ? module._state : {}
// Initialize the router and begin the application
let container = document.getElementById("atomic-app")
export let component = ReactDom.render(<RenderForcer />, container)

export function __unload() {
  ReactDom.unmountComponentAtNode(container)
}

if (module) {
  console.log("MODULE: ", module)
  component.setState(module.component.state)
}
