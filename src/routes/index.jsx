import CategoryDashboardPage from 'components/admin/pages/CategoryDashboardPage'
import AddnewCategory from 'components/admin/pages/CategoryDashboardPage/AddnewCategory'
import EditCategory from 'components/admin/pages/CategoryDashboardPage/EditCategory'
import DashBoardPage from 'components/admin/pages/DashboardPage'
import OrderDashbordPage from 'components/admin/pages/OrderDashbordPage'
import EditOrderPage from 'components/admin/pages/OrderDashbordPage/EditOrderPage'
import ProductDashboardPage from 'components/admin/pages/ProductDashboardPage'
import AddnewProduct from 'components/admin/pages/ProductDashboardPage/AddnewProduct'
import EditProduct from 'components/admin/pages/ProductDashboardPage/EditProduct'
import TemplateAdmin from 'components/common/templates/TemplateAdmin'
import TemplateAuth from 'components/common/templates/TemplateAuth'
import TemplateWebsite from 'components/common/templates/TemplateWebsite'
import AboutPage from 'components/website/pages/AboutPage'
import Login from 'components/website/pages/auth/Login'
import Logout from 'components/website/pages/auth/Logout'
import Register from 'components/website/pages/auth/Register'
import BlogDetailPage from 'components/website/pages/BlogDetailPage'
import BlogPage from 'components/website/pages/BlogPage'
import CartPage from 'components/website/pages/CartPage'
import CategoryPage from 'components/website/pages/CategoryPage'
import HomePage from 'components/website/pages/HomePage'
import DetailPage from 'components/website/pages/ProductDetailPage'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function Routes() {
    return (
        <Router>
            <Switch>

                <PrivateRoute path='/admin/:path?'>
                    <TemplateAdmin>
                        <Switch>
                            <Redirect exact from='/admin' to='/admin/dashboard' />
                            <Route exact path='/admin/dashboard'>
                                <DashBoardPage />
                            </Route>
                            <Route exact path='/admin/product/'>
                                <ProductDashboardPage />
                            </Route>
                            <Route exact path='/admin/product/addnew'>
                                <AddnewProduct />
                            </Route>
                            <Route exact path='/admin/product/edit/:id'>
                                <EditProduct />
                            </Route>
                            <Route exact path='/admin/category'>
                                <CategoryDashboardPage />
                            </Route>
                            <Route exact path='/admin/category/addnew'>
                                <AddnewCategory />
                            </Route>
                            <Route exact path='/admin/category/edit/:id'>
                                <EditCategory />
                            </Route>


                            <Route exact path='/admin/order'>
                                <OrderDashbordPage />
                            </Route>
                            <Route exact path='/admin/order/edit/:id'>
                                <EditOrderPage />
                            </Route>
                            <Route path='*'>
                                404 page website
                            </Route>
                        </Switch>
                    </TemplateAdmin>
                </PrivateRoute>

                <Route exact path='/auth/:path?'>
                    <TemplateAuth>
                        <Switch>
                            <Route path='/auth/register'>
                                <Register />
                            </Route>
                            <Route path='/auth/login'>
                                <Login />
                            </Route>
                            <Route path='/auth/logout'>
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
                            <Route exact path='/shop'>
                                <CategoryPage />
                            </Route>
                            <Route exact path='/detail/:id'>
                                <DetailPage />
                            </Route>
                            <Route exact path='/cart'>
                                <CartPage />
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
