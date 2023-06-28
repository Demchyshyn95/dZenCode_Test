import { ProductsActionsContext, ProductsStateContext } from "../../providers/Provider";
import React, { FC, useEffect, useMemo, useState } from 'react';
import Parishes from "./Parishes.component"
import { IOrder } from "../../costants";

const ParishesPage: FC = () => {
	const { changeViewDetail } = ProductsActionsContext();
	const { state } = ProductsStateContext();

	const [orders, setOrders] = useState<IOrder[]>(state.orders);
	const isViewDetail = useMemo(() => state.isViewDetail, [state.isViewDetail])

	useEffect(() => {
		setOrders(state.orders)
	}, [state.orders]);

	return (
		<Parishes
			{ ...
				{
					changeViewDetail,
					isViewDetail,
					orders
				}
			}
		/>
	);
};

export default ParishesPage;