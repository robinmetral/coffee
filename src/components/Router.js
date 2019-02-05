import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import App from "./App"
import Resume from "./Resume"
import NotFound from "./NotFound"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/manage" component={App} />
      <Route path="/:resumeId" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
