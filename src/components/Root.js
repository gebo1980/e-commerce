import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Detail from './Detail';
import Cart from './Cart';

const Root = () => (
    <BrowserRouter>
        <Header></Header>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/producto/:id" component={Detail} />
        </div>
    </BrowserRouter>
);

export default Root;