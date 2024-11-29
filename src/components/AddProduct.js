
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/productsSlice';

const AddProduct = () => {
	const [product, setProduct] = useState({
		id: Date.now(),
		name: '',
		description: '',
		price: '',
		available: true,
	});

	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addProduct(product));
		setProduct({ id: Date.now(), name: '', description: '', price: '', available: true });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name="name" value={product.name} onChange={handleChange} placeholder="Имя" required />
			<input name="description" value={product.description} onChange={handleChange} placeholder="Описание" required />
			<input name="price" value={product.price} onChange={handleChange} type="number" placeholder="Цена" required />
			<button type="submit">Добавить продукт</button>
		</form>
	);
};

export default AddProduct;
