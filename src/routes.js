import TemplateWebsite from 'components/common/templates/TemplateWebsite'
import Category from 'components/website/pages/Category'
import HomePage from 'components/website/pages/HomePage'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/:path?'>
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
