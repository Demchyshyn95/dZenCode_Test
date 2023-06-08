import { IProduct, ISelect, Selection } from "../../costants";

export interface ComponentProps {
	productsSpecification: ISelect[];
	productsType: ISelect[];
	specificationProduct: string;
	typeProduct: string;
	products: IProduct[];
	onSelect: (parameter: Selection, value: string) => void;
}