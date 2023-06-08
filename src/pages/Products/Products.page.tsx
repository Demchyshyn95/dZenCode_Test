import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ProductsStateContext } from "../../providers/ProductsProvider";
import { IProduct, ISelect, Selection } from "../../costants";
import { getProductSelection } from "./config";
import Products from "./Products.component";

const ProductsPage: FC = () => {
	const { state } = ProductsStateContext();

	const [specificationProduct, setSpecificationProduct] = useState<string>("");
	const [products, setProducts] = useState<IProduct[]>(state.products);
	const [typeProduct, setTypeProduct] = useState<string>("");

	useEffect(() => {
		setSpecificationProduct("");
		setProducts(state.products);
		setTypeProduct("");
	}, [state.products]);

	useEffect(() => {

	}, [typeProduct, specificationProduct]);

	const productsSpecification: ISelect[] = useMemo(() => getProductSelection(Selection.SPECIFICATION), []);
	const productsType: ISelect[] = useMemo(() => getProductSelection(Selection.TYPE), []);

	const onSelect = useCallback((parameter: Selection, value: string) => {
		switch (parameter) {
			case Selection.TYPE: {
				setTypeProduct(value);
				if (specificationProduct) {
					const newProduct = state.products
						.filter(el => el.type === value)
						.filter(el => el.specification === specificationProduct)
					setProducts(newProduct);
					return;
				}
				setProducts(state.products.filter(el => el.type === value));
				return;
			}
			case Selection.SPECIFICATION: {
				setSpecificationProduct(value);
				if (typeProduct) {
					const newProduct = state.products
						.filter(el => el.specification === value)
						.filter(el => el.type === typeProduct)
					setProducts(newProduct);
					return;
				}
				setProducts(state.products.filter(el => el.specification === value))
				return;
			}
		}
	}, [state.products, specificationProduct, typeProduct]);

	return (
		<Products
			{ ...
				{
					productsSpecification,
					specificationProduct,
					productsType,
					typeProduct,
					onSelect,
					products
				}
			}
		/>
	);
};

export default ProductsPage;