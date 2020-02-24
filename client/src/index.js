import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "./i18n/index"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import ToggleLang from "./components/ToggleLanguageBtns/ToggleLang"
ReactDOM.render(
  <BrowserRouter>
    <ToggleLang />
    <div className={"mainContainer"}>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
)

serviceWorker.unregister()
