import { IOrder, IProduct } from "../../../costants";

export interface ComponentProps extends PageProps {
	onShowModal: () => void;
	isShowModal: boolean;
	onCancel: () => void;
	onRemove: () => void;
	products: IProduct[];
	orders: IOrder[];
}

export interface PageProps {
	setIsShowDetail: (value: boolean) => void;
}