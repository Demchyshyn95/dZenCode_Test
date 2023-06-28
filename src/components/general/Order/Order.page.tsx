import { ProductsActionsContext } from '../../../providers/Provider';
import React, { FC, useCallback, useState } from 'react';
import Order from "./Order.component";
import { PageProps } from "./types";

const OrderPage: FC<PageProps> = (props: PageProps) => {
	const { item } = props; // data
	const { removeOrder, changeViewDetail } = ProductsActionsContext();

	const [isShowModal, setIsShowModal] = useState<boolean>(false);

	const onShowModal = useCallback(() => {
		setIsShowModal(true);
	}, []);

	const onCancel = useCallback(() => {
		setIsShowModal(false);
	}, []);

	const onRemove = useCallback(() => {
		setIsShowModal(false);
		removeOrder(item.id)
	}, [item]);

	return (
		<Order
			{...{
				changeViewDetail,
				isShowModal,
				onShowModal,
				onRemove,
				onCancel,
				item
			}}
		/>
	);
};

export default OrderPage;