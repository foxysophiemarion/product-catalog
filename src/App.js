import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
	return (
		<Provider store={store}>
			<h1>Каталог продуктов</h1>
			<AddProduct />
			<ProductList />
		</Provider>
	);
};

export default App;
