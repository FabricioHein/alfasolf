import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/Crud/UserCrud'
import UserShow from '../components/Crud/UserShow'


export default props => 
    <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/CriarContatos' component={UserCrud} />
        <Route path='/ShowContatos' component={UserShow} />      
      
        <Redirect from='*' to='/' />
    </Switch>