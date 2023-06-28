import { ProductsActionType, ProductsActions } from "./ProductsTypes";
import React from "react";

export const removeProduct = (dispatch: React.Dispatch<ProductsActions>) => (id: number): void => {
	dispatch({
		type: ProductsActionType.RemoveProduct,
		payload: id
	});
};

export const removeOrder = (dispatch: React.Dispatch<ProductsActions>) => (id: number): void => {
	dispatch({
		type: ProductsActionType.RemoveOrder,
		payload: id
	});
};


export const changeViewDetail = (dispatch: React.Dispatch<ProductsActions>) => (isDetail: boolean): void => {
	dispatch({
		type: ProductsActionType.ChangeViewDetail,
		payload: isDetail
	});
};



