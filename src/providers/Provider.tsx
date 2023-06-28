import { IProductsActionsContext, IProductsStateContext, IProductsProviderProps } from "./types";
import { productReducer, productsInitialState } from "../hooks/ProductsReducer";
import { removeProduct, removeOrder, changeViewDetail } from "../hooks/ProductsActions";
import { ProductsReducer } from "../hooks/ProductsTypes";
import React, { FC, useMemo, useReducer } from "react";
import createCtx from "../utils/createCtx";

const [stateContext, StateProvider] = createCtx<IProductsStateContext>();
const [actionsContext, ActionsProvider] = createCtx<IProductsActionsContext>();

const Provider: FC<IProductsProviderProps> = (props: IProductsProviderProps) => {
	const [state, dispatch] = useReducer<ProductsReducer>(productReducer, productsInitialState);

	const actions = useMemo(
		() => ({
			removeProduct: removeProduct(dispatch),
			removeOrder: removeOrder(dispatch),
			changeViewDetail: changeViewDetail(dispatch)
		}), []
	);

	return (
		<StateProvider value={{ state }}>
			<ActionsProvider value={actions}>
				{props.children}
			</ActionsProvider>
		</StateProvider>
	);
};

export {
	stateContext as ProductsStateContext,
	actionsContext as ProductsActionsContext,
	Provider
};
