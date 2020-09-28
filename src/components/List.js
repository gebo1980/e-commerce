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
            showAdd: false
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleCloseAdd = this.handleCloseAdd.bind(this);
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
    handleAdd(e) {
        e.preventDefault();
        this.setState({showAdd: true});
    }
    handleCloseAdd(reload) {
        return () => {
            if (reload) {
                this.setState({isLoading: true, showAdd: false});
                getProducts().then(data => this
                    .setState({productos: data, isLoading: false, showAdd: false}))
                    .catch(error => this.setState({showAdd: false}))
            } else {
                this.setState({showAdd: false})
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
            <Header onClickAdd={this.handleAdd} />
            <div className="container">
                <div className="grid-container">
                    {   
                        productos && productos.map((producto, i) => {
                            return (<Item key={i} data={producto} />)
                        })
                    }
                </div>
            </div>
            { this.state.showAdd && (<Login onClose={this.handleCloseAdd} />)}
        </React.Fragment>);
    }
}

export default List;