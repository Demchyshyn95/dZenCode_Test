import { ProductsActions, ProductsActionType, ProductsReducer, ProductsReducerState } from "./ProductsTypes";

export const productsInitialState: ProductsReducerState = {
	products: [
		{
			id: 1,
			serialNumber: 1234,
			isNew: false,
			photo: require(`../../assets/images/monitor-xiaomi-mi-display-redmi-1a-23.8-2.jpg`),
			title: 'ProductComponent 1',
			type: 'Monitor1',
			status: "Free",
			specification: 'Specification 1',
			guarantee: {
				start: '2017-06-29 12:09:33',
				end: '2017-06-29 12:09:33'
			},
			price: [
				{ value: 1200, symbol: 'USD', isDefault: 0 },
				{ value: 2600, symbol: 'UAH', isDefault: 1 }
			],
			order: 1,
			date: '2017-06-29 12:09:33'
		},
		{
			id: 2,
			serialNumber: 1234,
			isNew: true,
			photo: require(`../../assets/images/monitor-xiaomi-mi-display-redmi-1a-23.8-2.jpg`),
			title: 'ProductComponent 2',
			type: 'Monitor2',
			status: "Progress",
			specification: 'Specification 2',
			guarantee: {
				start: '2017-06-29 12:09',
				end: '2017-06-29 12:09'
			},
			price: [
				{ value: 1030, symbol: 'USD', isDefault: 0 },
				{ value: 2600, symbol: 'UAH', isDefault: 1 }
			],
			order: 2,
			date: '2017-06-29 12:09:33'
		},
		{
			id: 3,
			serialNumber: 12234,
			isNew: false,
			photo: require(`../../assets/images/monitor-xiaomi-mi-display-redmi-1a-23.8-2.jpg`),
			title: 'ProductComponent 3',
			type: 'Monitor3',
			status: "Free",
			specification: 'Specification 3',
			guarantee: {
				start: '2017-06-29 12:09',
				end: '2017-06-29 12:09'
			},
			price: [
				{ value: 1400, symbol: 'USD', isDefault: 0 },
				{ value: 2600, symbol: 'UAH', isDefault: 1 }
			],
			order: 3,
			date: '2017-06-29 12:09:33'
		}
	]
};

export const productReducer: ProductsReducer = (state: ProductsReducerState = productsInitialState, action: ProductsActions): ProductsReducerState => {
	switch (action.type) {
		case ProductsActionType.SetNewProducts: {
			return {
				...state,
				products: state.products.filter( el => el.id != action.payload)
			};
		}
		
		default: {
			return state;
		}
	}
};
