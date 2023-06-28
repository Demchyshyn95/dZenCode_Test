import { ProductsActionsContext } from '../../../providers/Provider';
import React, { FC, useCallback, useState } from 'react';
import ProductComponent from "./Product.component";
import { PageProps } from "./types";

const ProductPage: FC<PageProps> = (props: PageProps) => {
	const { item } = props; // data
	const { removeProduct } = ProductsActionsContext();

	const [isShowModal, setIsShowModal] = useState<boolean>(false);

	const onShowModal = useCallback(() => {
		setIsShowModal(true);
	}, []);

	const onCancel = useCallback(() => {
		setIsShowModal(false);
	}, []);

	const onRemove = useCallback(() => {
		setIsShowModal(false);
		removeProduct(item.id)
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