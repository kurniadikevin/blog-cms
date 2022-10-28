import React from 'react';
import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PostDetail } from './pages/PostDetail';
import { CreatePost } from './pages/CreatePage/create';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/posts/:id" exact component={PostDetail} />
      <Route path="/create" exact component={CreatePost} />
    </Switch>
  </BrowserRouter>
);

export default App;