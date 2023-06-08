import { ProductsStateContext } from "../../providers/ProductsProvider";
import React, { FC, useEffect, useState } from 'react';
import Parishes from "./Parishes.component"
import { IOrder } from "../../costants";

const ParishesPage: FC = () => {
	const { state } = ProductsStateContext();

	const [orders, setOrders] = useState<IOrder[]>(state.orders);

	useEffect(() => {
		setOrders(state.orders)
	}, [state.orders]);

	return (
		<Parishes
			{ ...
				{
					orders
				}
			}
		/>
	);
};

export default ParishesPage;