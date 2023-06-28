import { ProductsReducerState } from "../hooks/ProductsTypes";

export interface IProductsProviderProps {
	children: any;
}

export interface IProductsStateContext {
	state: ProductsReducerState;
}

export interface IProductsActionsContext {
	removeProduct: (id: number) => void;
	removeOrder: (id: number) => void;
	changeViewDetail: (isView: boolean) => void;
}
