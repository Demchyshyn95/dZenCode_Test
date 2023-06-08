import { IOrder, IProduct } from "../../../costants";

export interface ComponentProps {
	onRemove: () => void;
	onCancel: () => void;
	product?: IProduct;
	order?: IOrder;
}