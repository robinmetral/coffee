import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Map from "./Map"
import Add from "./Add"
import Edit from "./Edit"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Map} />
      <Route path={`${process.env.PUBLIC_URL}/add`} component={Add} />
      <Route path={`${process.env.PUBLIC_URL}/edit/:cafeId`} component={Edit} />
    </Switch>
  </BrowserRouter>
)

export default Router
