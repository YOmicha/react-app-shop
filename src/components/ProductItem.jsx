import React, { useState, useContext } from 'react';
import '../styles/ProductItem.scss';
import Appcontext from '../context/Appcontext';

const ProductItem = ({product}) => {

	const { addTocart } = useContext(Appcontext);

	const handleclick = (item) => {
		addTocart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleclick(product)}>
					<img src="./icons/bt_add_to_cart.svg" alt="" />
				</figure>
				
			</div>
		</div>
	);
}

export default ProductItem;
