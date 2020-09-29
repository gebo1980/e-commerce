import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getUserToken} from '../api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            showSending: false,
            user: '',
            password: '',
            passwordShow: false 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this); 
    }
    handleSubmit(e) {
        e.preventDefault();
        const { onClose } = this.props;
        this.setState({showSending: true});
        getUserToken(
            this.state.user,
            this.state.password
        )
        .then(onClose(true))
        .catch(error => this.setState({hasError: true}));
    }
    handleChange(field) {
        return(event => {
            this.setState({
                [field]: event.target.value
            })
        })
    }
    togglePasswordVisibility(e) {
        e.preventDefault();
        this.setState({passwordShow: !this.state.passwordShow});
    }
    render() {
        const {onClose} = this.props;
        const {showSending, user, password, hasError, passwordShow} = this.state;

        return (<div className="modal-login">
<div className="modal-login-body">
            <div className="modal-login-header">
                <img src={require('../img/logo_ecommerce_small.png')} alt="TestShop"></img>
                <span className="close" onClick={onClose(false)} >&times;</span>
            </div>
            <div className="modal-login-content">
                {showSending && (<span className="success">Enviando ...</span>)}
                {hasError && (<div className="error">Usuario y/o password incorrecto.</div>)}
                <form>
                    <label>Usuario</label>
                    <input type="text" value={user} onChange={this.handleChange("user")} placeholder="Usuario" minLength="4" maxLength="15" required></input>
                    <label>Password</label>
                    <div className="pass-wrapper">
                        <input type={passwordShow?"text":"password"} value={password} onChange={this.handleChange("password")} placeholder="Password" minLength="8" maxLength="25" required></input>
                        <i onClick={this.togglePasswordVisibility}>{eye}</i>
                    </div>
                    <center>
                        <input type="submit" onClick={this.handleSubmit} value="Acceder" disabled={showSending}></input>
                    </center>
                </form>
            </div>
</div>
        </div>)
    }
}

Login.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Login;