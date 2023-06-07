import Products from "./Products.component";
import { getServerData } from "./config"
import  {useState} from 'react';
/*eslint-disable*/
const ProductsPage = () => {
	console.log("ProductsPage init");
	const [isActive, setIsActive] = useState(false);
	const [error, setError] = useState(false);
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const getWeather = async (city: string) => {
		setError(false);
		setLoading(!loading);
		setDisabled(!disabled);

		const response = await getServerData(city);
		if (!response.main) {
			setError(!error)
			setLoading(prevState => !prevState);
			setDisabled(prevState => !prevState);
		} else {
			const {main, sys, weather, name, wind} = response;
			// @ts-ignore
			setWeather({main, sys, name, weather, wind})
			setIsActive(prevState => !prevState);
		}
	}
	const deactive = () => {
		setLoading(prevState => !prevState);
		setDisabled(prevState => !prevState);
		setIsActive(prevState => !prevState);
	}

	return (
		<Products
			{...{

			}}
		/>
	)
}


export default ProductsPage;
