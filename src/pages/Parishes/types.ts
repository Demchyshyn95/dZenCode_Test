import { IOrder } from "../../costants";

export interface ComponentProps {
	changeViewDetail: (e: boolean) => void;
	isViewDetail: boolean;
	orders: IOrder[];
}