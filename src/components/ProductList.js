import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from '../features/productsSlice';

const ProductList = () => {
	const products = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					<h3>{product.name}</h3>
					<p>{product.description}</p>
					<p>{product.price} $</p>
					<p>{product.available ? 'Доступен' : 'Недоступен'}</p>
					<button onClick={() => dispatch(removeProduct(product.id))}>Удалить</button>
					<button onClick={() => dispatch(toggleAvailability(product.id))}>
						Переключить доступность
					</button>
				</li>
			))}
		</ul>
	);
};

export default ProductList;
