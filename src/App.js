import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import {Header} from './partials/Header/Header.js'
import {PostContainer} from './partials/Body/Posts/PostContainer.js'
import {UserContainer} from './partials/Body/User/UserContainer.js'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const App = () => {
  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/posts" component={PostContainer} />
          <Route path="/user/:userId" component={UserContainer} />
          <Route render={() => <Redirect to="/posts" />} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}
