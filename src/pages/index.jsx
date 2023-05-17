import React from 'react'
import Game from './Game'
import Welcome from './Welcome'
import Form from './Form'
import { Switch, Route } from 'react-router-dom'

const navigate = (page) => {
  window.location = `/?route=${page}`
}

const Page = () => {
  // escoger la pagina

  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/Form" component={Form} />
      <Route exact path="/Game" component={Game} />
    </Switch>
  )
}

export { navigate }
export default Page
