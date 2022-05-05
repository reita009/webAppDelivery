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

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
        <Container>
            
            <Menu>
                <MenuItem icon={store} Link="/"/> 
                <MenuItem icon={orders} Link="/orders"/> 
                <MenuItem icon={profile}Link="/profile"/> 
            </Menu>
            <PageBody>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route path="/tela2/:nome">
                        <Tela2Screen />
                    </Route>
                </Switch>
            </PageBody>
        </Container>
            <h1>Oi, {name}</h1>
            
            
        </BrowserRouter>
    );
}