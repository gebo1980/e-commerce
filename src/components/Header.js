import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const cart = <FontAwesomeIcon icon={faShoppingCart} size="2x" className="header-image-cart" color="#ff7f27" />;

const Header = ({onClickLogin}) => (
    <div className="header-content">
        <div className="header-title-text">
            <Link to="/"><img src={require('../img/logo_ecommerce.png')} alt="TestShop Online"></img></Link>
        </div>
        <Link to="/cart"><i className="header-button-cart">{cart}</i></Link>
        <input type="button" onClick={onClickLogin} value="Entrar" className="header-button-add"></input>
    </div>
);

Header.propTypes = {
    onClickLogin: PropTypes.func.isRequired
};

export default Header;  