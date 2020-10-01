import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow, faFont } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Login from './Login';
import Menu from './BurguerMenu/Menu';
import MenuButton from './BurguerMenu/MenuButton';
import MenuItem from './BurguerMenu/MenuItem';

const twitter = <FontAwesomeIcon icon={faCrow} color="white" />;
const facebook = <FontAwesomeIcon icon={faFont} color="white" />;
// const home = <FontAwesomeIcon icon={faHome} className="menuitem-image" color="white" />;
// const tags = <FontAwesomeIcon icon={faTags} className="menuitem-image" color="white" />;

class Footer extends Component {
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
                <div className="footer-content">
                    <div className="footer-header">
                        Siguenos en <i>{twitter}</i><i>{facebook}</i>
                    </div>
                    <div className="footer-body">
                        <div className="footer-body-column">
                            <ul>
                                <li>¿Quienes somos?</li>
                                <li>Política de Privacidad</li>
                                <li>Política de Cookies</li>
                                <li>Condiciones de Uso</li>
                            </ul>
                        </div>
                        <div className="footer-body-column">
                            <ul>
                                <li>Ayuda</li>
                                <li>Contacto</li>
                                <li>Prensa y Comunicación</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }    
};

// Header.propTypes = {
//     onClickLogin: PropTypes.func.isRequired
// };

export default Footer;  