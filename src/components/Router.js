import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./App"
import ViewResume from "./ViewResume"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:resumeId" component={ViewResume} />
    </Switch>
  </BrowserRouter>
)

export default Router
