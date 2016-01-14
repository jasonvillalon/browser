import ReactDom from "react-dom"
import variables from "../variables"

import AppRouter from "../AppRouter/index"

let cb = () => {
  // Scroll to active element even o div
  if (/Android 4\.[0-3]/.test(navigator.appVersion) || /Android 5\.[0-3]/.test(navigator.appVersion)) {
    window.addEventListener("resize", function() {
      if (document.activeElement.tagName === "INPUT") {
        window.setTimeout(function() {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  }
  // Initialize the router and begin the application
  ReactDom.render(AppRouter, document.getElementById("atomic-app"))
}
// Ensure the DOM has finished loading ..
if (document.readyState !== "loading") {
  cb()
} else if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", cb)
} else {
  document.attachEvent("onreadystatechange", function() {
    if (document.readyState !== "loading") {
      cb()
    }
  })
}
