import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ProductsStateContext } from "../../providers/ProductsProvider";
import { IProduct, ISelect, Selection } from "../../costants";
import { getProductSelection } from "./config";
import Profit from "./Profit.component";

const ProfitPage: FC = () => {
	const { state } = ProductsStateContext();

	const [products, setProducts] = useState<IProduct[]>(state.products);

	useEffect(() => {
		setProducts(state.products)
	}, [state.products]);

	const productsSpecification: ISelect[] = useMemo(() => getProductSelection(Selection.SPECIFICATION), []);
	const productsType: ISelect[] = useMemo(() => getProductSelection(Selection.TYPE), []);

	const onSelect = useCallback((parameter: Selection, value: string) => {
		setProducts(products.filter(el => parameter.toUpperCase() === Selection.TYPE.toUpperCase()
			? el.type.toUpperCase() === value.toUpperCase() : el.specification.toUpperCase() === value.toUpperCase()));
	}, [products]);

	return (
		<Profit
			{...
				{
					productsSpecification,
					productsType,
					onSelect,
					products
				}
			}
		/>
	);
};

export default ProfitPage;