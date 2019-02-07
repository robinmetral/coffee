import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./App"
import Add from "./Add"
import Edit from "./Edit"
import View from "./View"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
      <Route path={`${process.env.PUBLIC_URL}/add`} component={Add} />
      <Route path={`${process.env.PUBLIC_URL}/edit/:resumeId`} component={Edit} />
      <Route path={`${process.env.PUBLIC_URL}/:resumeId`} component={View} />
    </Switch>
  </BrowserRouter>
)

export default Router
