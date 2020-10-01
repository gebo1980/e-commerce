import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome, faTags } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Login from './Login';
import Menu from './BurguerMenu/Menu';
import MenuButton from './BurguerMenu/MenuButton';
import MenuItem from './BurguerMenu/MenuItem';

const cart = <FontAwesomeIcon icon={faShoppingCart} size="2x" className="header-image-cart" color="#ff7f27" />;
const home = <FontAwesomeIcon icon={faHome} className="menuitem-image" color="white" />;
const tags = <FontAwesomeIcon icon={faTags} className="menuitem-image" color="white" />;

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
                    <Link to="/">
                        <MenuItem key="1" onClick={()=>{this.handleLinkClick();}}>
                            <i>{home}</i>
                            Inicio
                        </MenuItem>
                    </Link>
                    <Link to="/cart">
                        <MenuItem key="2" onClick={()=>{this.handleLinkClick();}}>
                            <i>{tags}</i>
                            Ofertas
                        </MenuItem>
                    </Link>
                </Menu>
                <center>{ this.state.showLogin && (<Login onClose={this.handleCloseLogin} />)}</center> 
            </React.Fragment>
        )
    }    
};

// Header.propTypes = {
//     onClickLogin: PropTypes.func.isRequired
// };

export default Header;  