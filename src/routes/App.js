import React from 'react'
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodo';
import { HashRouter, Route, Switch } from "react-router-dom";


function App() {

  return (
    <HashRouter>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path="/search/:slug?" >
          <HomePage />
        </Route >

        <Route exact path='/new'>
          <NewTodoPage />
        </Route >

        <Route exact path='/edit/:id' >
          <EditTodoPage />
        </Route >

        <Route path='*' >
          <p>Not Found</p>
        </Route >

      </Switch>

    </HashRouter>
  );
}
export { App };