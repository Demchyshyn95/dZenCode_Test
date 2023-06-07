/* REDUCER STATE */
import { IProduct } from "../../costants";

export interface ProductsReducerState {
	products: IProduct[]
}

/* ACTION TYPES */

export enum ProductsActionType {
	SetNewProducts = "SET_NEW_PRODUCTS",
}

/* ACTIONS */

export interface SetNewProducts {
	type: ProductsActionType.SetNewProducts;
	payload: number;
}

export type ProductsActions = SetNewProducts;

export type ProductsReducer = (state: ProductsReducerState, action: ProductsActions) => ProductsReducerState;
