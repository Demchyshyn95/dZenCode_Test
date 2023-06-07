import { IProductsActionsContext, IProductsStateContext, IProductsProviderProps } from "./types";
import { productReducer, productsInitialState } from "../hooks/Products/ProductsReducer";
import { setSelectedMenuItem  } from "../hooks/Products/ProductsActions";
import { ProductsReducer } from "../hooks/Products/ProductsTypes";
import React, { FC, useMemo, useReducer } from "react";
import createCtx from "../utils/createCtx";

const [stateContext, StateProvider] = createCtx<IProductsStateContext>();
const [actionsContext, ActionsProvider] = createCtx<IProductsActionsContext>();

const ProductsProvider: FC<IProductsProviderProps> = (props: IProductsProviderProps) => {
	const [state, dispatch] = useReducer<ProductsReducer>(productReducer, productsInitialState);

	const actions = useMemo(
		() => ({
			setNewProducts: setSelectedMenuItem(dispatch)
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
	ProductsProvider
};
