import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "components/App"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
    </Switch>
  </BrowserRouter>
)

export default Router
