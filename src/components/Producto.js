import React from 'react';
import PropTypes from 'prop-types';

const Producto = ({ data}) => (
    <div className="grid-item">
        <img className="preview-image" src={data.thumbnail} alt={data.name} />
        <div className="preview-title">{data.name}</div>
    </div>
);

Producto.propTypes = {
    data: PropTypes.object.isRequired
}

export default Producto; 