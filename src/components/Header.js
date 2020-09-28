import React from 'react';
import PropTypes from 'prop-types';

const Header = ({onClickAdd}) => (
    <div className="header-content">
        <div className="header-title-text">Tienda Online</div>
        <input type="button" onClick={onClickAdd} value="Login" className="header-button-add"></input>
    </div>
);

Header.propTypes = {
    onClickAdd: PropTypes.func.isRequired
};

export default Header;