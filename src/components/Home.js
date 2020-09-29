import React, {Component} from 'react';
import {getProducts} from '../api';
import Loading from './Loading';
import Item from './Item'
import Header from './Header'
import Login from './Login';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            productos: null,
            error: null,
            showLogin: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleCloseLogin = this.handleCloseLogin.bind(this);
    }
    //Ejemplo con Promises
    // componentDidMount() {
    //     this.setState({isLoading: true});
    //     getProducts().then(data => {
    //         this.setState({isLoading: false, productos:data});
    //     })
    // }
    async componentDidMount() {
        this.setState({isLoading: true});
        try {
            const productos = await getProducts();
            this.setState({productos, isLoading: false});
        } catch (error) {
            this.setState({error, isLoading: false});
        }
    }
    handleLogin(e) {
        e.preventDefault();
        this.setState({showLogin: true});
    }
    handleCloseLogin(reload) {
        return () => {
            if (reload) {
                this.setState({isLoading: true, showLogin: false});
                getProducts().then(data => this
                    .setState({productos: data, isLoading: false, showLogin: false}))
                    .catch(error => this.setState({showLogin: false}))
            } else {
                this.setState({showLogin: false})
            }
        }
    }
    render() {  
        const { productos, isLoading, error } = this.state;
        if (error) {
            return (<div> ERROR </div>);
        }
        if (isLoading) return (<Loading message="Cargando ..." />);
        return (<React.Fragment>
            <Header onClickLogin={this.handleLogin} />
            {/* <div className="container">
                <div className="grid-container">
                    {   
                        productos && productos.map((producto, i) => {
                            return (<Item key={i} data={producto} />)
                        })
                    }
                </div>
            </div> */}
            { this.state.showLogin && (<Login onClose={this.handleCloseLogin} />)} 
        </React.Fragment>);
    }
}

export default List;