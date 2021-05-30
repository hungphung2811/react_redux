import TemplateAuth from 'components/common/templates/TemplateAuth'
import TemplateWebsite from 'components/common/templates/TemplateWebsite'
import Login from 'components/website/pages/auth/Login'
import Logout from 'components/website/pages/auth/Logout'
import Register from 'components/website/pages/auth/Register'
import Category from 'components/website/pages/Category'
import HomePage from 'components/website/pages/HomePage'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/buyer/:path?'>
                    <TemplateAuth>
                        <Switch>
                            <Route path='/buyer/register'>
                                <Register />
                            </Route>
                            <Route path='/buyer/login'>
                                <Login />
                            </Route>
                            <Route path='/buyer/logout'>
                                <Logout />
                            </Route>

                        </Switch>
                    </TemplateAuth>
                </Route>
                <Route>
                    <TemplateWebsite>
                        <Switch>
                            <Redirect exact from="/" to="/home" />
                            <Route path='/home'>
                                <HomePage />
                            </Route>
                            <Route exact path='/category/:id'>
                                <Category />
                            </Route>
                            <Route path='*'>
                                404 page website
                            </Route>
                        </Switch>
                    </TemplateWebsite>
                </Route>



            </Switch>
        </Router>
    )
}

export default Routes
