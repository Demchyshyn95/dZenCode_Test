import { ProductsActionType, SetNewProducts } from "./ProductsTypes";
import React from "react";

export const setSelectedMenuItem = (dispatch: React.Dispatch<SetNewProducts>) => (id: number): void => {
	dispatch({
		type: ProductsActionType.SetNewProducts,
		payload: id
	});
};



