/* REDUCER STATE */
import { IOrder, IProduct } from "../costants";

export interface ProductsReducerState {
	orders: IOrder[]
	products: IProduct[]
	isViewDetail: boolean
}

/* ACTION TYPES */

export enum ProductsActionType {
	RemoveProduct = "REMOVE_PRODUCTS",
	RemoveOrder = "REMOVE_ORDER",
	ChangeViewDetail = "CHANGE_VIEW_DETAIL",
}

/* ACTIONS */

export interface removeProducts {
	type: ProductsActionType.RemoveProduct;
	payload: number;
}

export interface removeOrder {
	type: ProductsActionType.RemoveOrder;
	payload: number;
}

export interface ViewDetail {
	type: ProductsActionType.ChangeViewDetail;
	payload: boolean;
}

export type ProductsActions = removeProducts | removeOrder | ViewDetail;

export type ProductsReducer = (state: ProductsReducerState, action: ProductsActions) => ProductsReducerState;
