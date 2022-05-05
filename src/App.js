import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import store from '../src/assets/store.png'
import orders from '../src/assets/order.png'
import profile from '../src/assets/profile.png'
import { Container,Menu,PageBody } from './AppStyled';
import MenuItem from './components/MenuItem';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import PrivateRoute from './components/PrivateRoute';
import Cart from './components/cart';
export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
        <Container>
            
            <Menu>
                <a href='/'><MenuItem icon={store} Link="/"/> </a>
                <a href='/orders'><MenuItem icon={orders} Link="/orders"/> </a>
                <a href='/profile'><MenuItem icon={profile}Link="/profile"/> </a>
                
            </Menu>
            <PageBody>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <PrivateRoute path="/orders">
                        <div>Tela de pedidos</div>
                    </PrivateRoute>
                    <PrivateRoute path="/profile">
                        <div>Tela de profile</div>
                    </PrivateRoute>
                    <Route path="/tela2/:nome">
                        <Tela2Screen />
                    </Route>
                </Switch>
            </PageBody>
            <Cart/>
        </Container>
            <h1>Oi, {name}</h1>
            
            
        </BrowserRouter>
    );
}