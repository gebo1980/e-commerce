import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getProductDetail } from '../api';
import Loading from './Loading';
import Product from './Product';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            product: null,
            error: null
        };
    }
    componentDidMount() {
        const { match } = this.props;
        this.setState({ isLoading: true});
        getProductDetail({ idProduct: match.params.id })
        .then(data => this.setState({ product: data, isLoading: false}))
        .catch(err => this.setState({ error:err, isLoading: false}))
    }
    render() {
        const { isLoading, error, product } = this.state;
        const { match } = this.props;

        if (error) return <p className="error">{error.message}</p>;
        if (isLoading) return <Loading message={`Cargando producto (#${match.params.id}) ...`} speed={15} />
        
        return (<React.Fragment> 
            <div className="detail-container">
                <Product name={product.name} image={product.thumbnail} />
                <div className="detail-summary">
                    <h2 className="detail-title">{product.name}</h2>
                    <p>{product.name}</p>
                </div>
            </div>    
        </React.Fragment>);
    }
}

export default withRouter(Detail);