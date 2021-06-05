import CategoryDashboardPage from 'components/admin/pages/CategoryDashboardPage'
import DashBoardPage from 'components/admin/pages/DashboardPage'
import ProductDashboardPage from 'components/admin/pages/ProductDashboardPage'
import TemplateAdmin from 'components/common/templates/TemplateAdmin'
import TemplateAuth from 'components/common/templates/TemplateAuth'
import TemplateWebsite from 'components/common/templates/TemplateWebsite'
import AboutPage from 'components/website/pages/AboutPage'
import Login from 'components/website/pages/auth/Login'
import Logout from 'components/website/pages/auth/Logout'
import Register from 'components/website/pages/auth/Register'
import BlogDetailPage from 'components/website/pages/BlogDetailPage'
import BlogPage from 'components/website/pages/BlogPage'
import CategoryPage from 'components/website/pages/CategoryPage'
import DetailPage from 'components/website/pages/DetailPage'
import HomePage from 'components/website/pages/HomePage'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function Routes() {
    return (
        <Router>
            <Switch>

                <Route path='/admin/:path?'>
                    <TemplateAdmin>
                        <Switch>
                            <Redirect exact from='/admin' to='/admin/dashboard' />
                            <Route exact path='/admin/dashboard'>
                                <DashBoardPage />
                            </Route>
                            <Route exact path='/admin/product'>
                                <ProductDashboardPage />
                            </Route>
                            <Route exact path='/admin/category'>
                                <CategoryDashboardPage />
                            </Route>
                            <Route path='*'>
                                404 page website
                            </Route>
                        </Switch>
                    </TemplateAdmin>
                </Route>

                <Route exact path='/buyer/:path?'>
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
                            <Route exact path='/home'>
                                <HomePage />
                            </Route>
                            <Route exact path='/blog'>
                                <BlogPage />
                            </Route>
                            <Route exact path='/blog/:id'>
                                <BlogDetailPage />
                            </Route>
                            <Route path='/about'>
                                <AboutPage />
                            </Route>
                            <Route exact path='/category/:id'>
                                <CategoryPage />
                            </Route>
                            <Route exact path='/detail/:id'>
                                <DetailPage />
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
