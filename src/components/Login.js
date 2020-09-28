import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getUserToken} from '../api';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            showSending: false,
            user: '',
            password: '' 
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
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
    render() {
        const {onClose} = this.props;
        const {showSending, user, password, hasError} = this.state;
        return (<div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose(false)} >&times;</span>
                <h2>Login</h2>
                {showSending && (<span className="success">Enviando ...</span>)}
                {hasError && (<div className="error">Usuario y/o password incorrecto.</div>)}
                <form>
                    <label>Usuario</label>
                    <input type="text" value={user} onChange={this.handleChange("user")} minLength="4" maxlenght="15" required></input>
                    <label>Password</label>
                    <input type="text" value={password} onChange={this.handleChange("password")} minLength="8" maxlenght="25" required></input>
                    <input type="submit" onClick={this.handleSubmit} value="Acceder" disabled={showSending}></input>
                </form>
            </div>
        </div>)
    }
}

Login.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Login;