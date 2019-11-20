import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import Login from './components/Auth/Login';

import Registration from './components/Auth/Registration';
import AddPost from './components/AddPost'

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    <Route path='/login' component={Login} />
    <Route path='/registration' component={Registration} />
    <Route path='/addpost' component={AddPost} />
  </Layout>
);
