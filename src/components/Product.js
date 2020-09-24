import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ title, image }) => (
    <div className="product-container">
        <img className="product" width="100%" height="400px" src={image} alt={title} />
    </div>
);

Product.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Product;