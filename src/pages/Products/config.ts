import { ISelect, products, Selection } from "../../costants";

export const getProductSelection = (selection: Selection): ISelect[] => products.map(el => ({
	label: selection === Selection.TYPE ? el.type : el.specification,
	value: selection === Selection.TYPE ? el.type : el.specification
}));