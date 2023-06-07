import { ProductsActionsContext } from '../../../providers/ProductsProvider';
import React, { FC, useCallback, useState } from 'react';
import ProductComponent from "./Product.component";
import { PageProps } from "./types";

const ProductPage: FC<PageProps> = (props: PageProps) => {
	const { item } = props; // data
	const { setNewProducts } = ProductsActionsContext();

	const [isShowModal, setIsShowModal] = useState<boolean>(false);

	const onShowModal = useCallback(() => {
		setIsShowModal(true);
	}, []);

	const onCancel = useCallback(() => {
		setIsShowModal(false);
	}, []);

	const onRemove = useCallback(() => {
		setIsShowModal(false);
		setNewProducts(item.id)
	}, [item]);

	return (
		<ProductComponent
			{...{
				isShowModal,
				onShowModal,
				onRemove,
				onCancel,
				item
			}}
		/>
	);
};

export default ProductPage;