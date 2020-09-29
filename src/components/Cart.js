import React, {Component} from 'react';
import Header from './Header';

class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <Header onClickLogin={this.handleLogin} />
                <div className="container">
                    <div className="grid-container">
                        hola
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Cart;