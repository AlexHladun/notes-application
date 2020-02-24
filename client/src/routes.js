import React from "react"
import { Route, Switch } from "react-router-dom"
import NotesList from "./components/NotesList/NotesList"
import NoteItem from "./components/NoteItem/NoteItem"

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={NotesList} />
        <Route path="/note/:id" component={NoteItem} />
      </Switch>
    </>
  )
}

export default Routes
