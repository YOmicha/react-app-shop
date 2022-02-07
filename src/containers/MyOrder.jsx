import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import Appcontext from '../context/Appcontext';

const MyOrder = () => {

	const {state} = useContext(Appcontext)

	const orders = state.cart;
	console.log(orders);

	const TotalPrice = orders.reduce((acc, item) => acc + item.price , 0);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src="./icons/flechita.svg" alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				

				{ orders.map( product => (

					<OrderItem product={product} key={product.id} />

				))}


				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${TotalPrice}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
