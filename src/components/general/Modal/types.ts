import { IProduct } from "../../../costants";

export interface ComponentProps {
	onRemove: () => void;
	onCancel: () => void;
	item: IProduct;
}