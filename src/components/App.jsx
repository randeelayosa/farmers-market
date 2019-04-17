import React from 'react'
import Header from './Header';
import Schedule from './Schedule';
import Produce from './Produce';
import { Switch, Route } from 'react-router-dom';

function App(){
  const appStyle ={
    fontFamily: 'Helvetica'
  }
  return (
    <div style={appStyle}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Schedule} />
        <Route path='/produce' component={Produce} />
      </Switch>
    </div>
  )
}

export default App
