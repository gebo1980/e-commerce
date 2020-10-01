import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Detail from './Detail';
import Cart from './Cart';

const Root = () => (
    <BrowserRouter>
        <Header></Header>
        <div className="root-body">
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/producto/:id" component={Detail} />
        </div>
        <Footer></Footer>
    </BrowserRouter>
);

export default Root;