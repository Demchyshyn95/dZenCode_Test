import { IProduct } from "../../../costants";

export interface ComponentProps extends PageProps {
	onShowModal: () => void;
	isShowModal: boolean;
	onCancel: () => void;
	onRemove: () => void;
}

export interface PageProps {
	item: IProduct;
}