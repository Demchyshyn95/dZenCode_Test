import { ProductsStateContext } from '../../../providers/Provider';
import React, { FC, useCallback, useMemo, useState } from 'react';
import Details from "./Details.component";
import { PageProps } from "./types";

const DetailsPage: FC<PageProps> = (props: PageProps) => {
	const { setIsShowDetail } = props; // func

	const { state } = ProductsStateContext();

	const [isShowModal, setIsShowModal] = useState<boolean>(false);

	const { orders, products } = useMemo(() => state, [state])

	const onShowModal = useCallback(() => {
		setIsShowModal(true);
	}, []);

	const onCancel = useCallback(() => {
		setIsShowDetail(false);
	}, []);

	const onRemove = useCallback(() => {
		setIsShowModal(false);
	}, []);

	return (
		<Details
			{...{
				setIsShowDetail,
				isShowModal,
				onShowModal,
				products,
				onRemove,
				onCancel,
				orders
			}}
		/>
	);
};

export default DetailsPage;