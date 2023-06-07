import { IProduct, ISelect, Selection } from "../../costants";

export interface ComponentProps {
	productsSpecification: ISelect[];
	productsType: ISelect[];
	products: IProduct[];
	onSelect: (parameter: Selection, value: string) => void;
}