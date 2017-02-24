import "systemjs-hot-reloader/default-listener.js"

export function __reload(m) {
  if (m && m.component.state) {
    component.setState(m.component.state)
  }
}

import React from "react"
import ReactDom from "react-dom"
import {Router, browserHistory} from "react-router"

import AppRouter from "../AppRouter/index"

const RenderForcer = React.createClass({
  componentWillMount() {
    // a little hack to help us rerender when this module is reloaded
    this.forceUpdate()
  },
  render() {
    return <div>
      <Router history={browserHistory}>
        {AppRouter}
      </Router>
    </div>
  }
})

export let component = ReactDom.render(<RenderForcer />, document.getElementById("atomic-app"))
