import { IOrder } from "../../../costants";

export interface ComponentProps extends PageProps {
	changeViewDetail: (value: boolean) => void;
	onShowModal: () => void;
	isShowModal: boolean;
	onCancel: () => void;
	onRemove: () => void;
}

export interface PageProps {
	item: IOrder;
}