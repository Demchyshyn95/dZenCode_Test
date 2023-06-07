import { IProduct, ISelect, products as defaultProducts, Selection } from "../../costants";
import React, { FC, useCallback, useMemo, useState } from 'react';
import { getProductSelection } from "./config";
import Profit from "./Profit..component";

const ProfitPage: FC = () => {
	const [products, setProducts] = useState<IProduct[]>(defaultProducts);

	const productsSpecification: ISelect[] = useMemo(() => getProductSelection(Selection.SPECIFICATION), []);
	const productsType: ISelect[] = useMemo(() => getProductSelection(Selection.TYPE), []);

	const onSelect = useCallback((parameter: Selection, value: string) => {
		setProducts(defaultProducts.filter(el => parameter.toUpperCase() === Selection.TYPE.toUpperCase()
			? el.type.toUpperCase() === value.toUpperCase() : el.specification.toUpperCase() === value.toUpperCase()));
	}, [defaultProducts]);

	const onRemoveItem = useCallback((itemId: number) => {
		setProducts(products.filter(el => el.id != itemId));
	}, [products]);

	return (
		<Profit
			{...
				{
					productsSpecification,
					productsType,
					onRemoveItem,
					onSelect,
					products
				}
			}
		/>
	);
};

export default ProfitPage;