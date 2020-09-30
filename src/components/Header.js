import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Login from './Login';
import Footer from './BurguerMenu/Footer';
import Menu from './BurguerMenu/Menu';
import MenuButton from './BurguerMenu/MenuButton';
import MenuItem from './BurguerMenu/MenuItem';

const cart = <FontAwesomeIcon icon={faShoppingCart} size="2x" className="header-image-cart" color="#ff7f27" />;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            menuOpen: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleCloseLogin = this.handleCloseLogin.bind(this);
    }
    handleLogin(e) {
        e.preventDefault();
        this.setState({showLogin: true});
    }
    handleCloseLogin() {
        this.setState({showLogin: false})
    }
    handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
    } 
    handleLinkClick() {
        this.setState({menuOpen: false});
    }
    render() {
        const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
        const menuItems = menu.map((val, index) => {
          return (
            <MenuItem key={index} onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
        });
        return (
            <React.Fragment>
                <div className="header-content">
                    <div className="burguer-container">
                        <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} />
                    </div>
                    <div className="header-title-text">
                        <Link to="/"><img src={require('../img/logo_ecommerce.png')} alt="TestShop Online"></img></Link>
                    </div>
                    <Link to="/cart"><i className="header-button-cart">{cart}</i></Link>
                    <input type="button" onClick={this.handleLogin} value="Entrar" className="header-button-add"></input>
                </div>
                <Menu open={this.state.menuOpen}>
                    {menuItems}
                </Menu>
                { this.state.showLogin && (<Login onClose={this.handleCloseLogin} />)} 
            </React.Fragment>
        )
    }    
};

// Header.propTypes = {
//     onClickLogin: PropTypes.func.isRequired
// };

export default Header;  