import React, {Component} from 'react';
import Loading from './Loading';
import Producto from './Producto'
import Header from './Header'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            productos: null
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(() => {
            this.setState({isLoading: false, productos: [{
                id:0,
                name: 'Manzana',
                url: '',
                thumbnail: 'https://images.app.goo.gl/xAjjMaR2N8xV2ywS7'
            }, 
            {
                id:2,
                name: 'Pera',
                url: '',
                thumbnail: 'https://images.app.goo.gl/1T1Sma5FmX42TaU7A'
            }, 
            {
                id:3,
                name: 'Platano',
                url: '',
                thumbnail: 'https://images.app.goo.gl/5c54fc6yhZy7rz6AA'
            }]});
        }, 2000);
    }

    render() {
        const { productos, isLoading } = this.state;
        if (isLoading) return (<Loading message="Cargando ..." />);
        return (<React.Fragment>
            <Header onClickAdd={this.handleAdd} />
            <div className="container">
                <div className="grid-container">
                    {   
                        productos && productos.map((producto, i) => {
                            return (<Producto key={i} data={producto} />)
                        })
                    }
                </div>
            </div>
        </React.Fragment>);
    }
}

export default List;