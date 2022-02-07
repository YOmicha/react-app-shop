import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import Appcontext from '../context/Appcontext';


const OrderItem = ({product}) => {

	const { removecart } = useContext(Appcontext);

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src="./icons/icon_close.png" alt="close" onClick={() => removecart(product)} />
		</div>
	);
}

export default OrderItem;
