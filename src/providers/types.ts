import { ProductsReducerState } from "../hooks/Products/ProductsTypes";

export interface IProductsProviderProps {
	children: any;
}

export interface IProductsStateContext {
	state: ProductsReducerState;
}

export interface IProductsActionsContext {
	setNewProducts: (id: number) => void;
}
