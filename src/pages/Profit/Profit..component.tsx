import {
	Container,
	HeaderContainer,
	Title,
	StyledSelect,
	SelectorContainer,
	TitleSelect,
	ListContainer
} from "./styles";
import { Selection } from "../../costants";
import { ComponentProps } from "./types";
import React, { FC, memo } from 'react';
import ProductPage from "../../components/general/Product/Product.page";

const Profit: FC<ComponentProps> = (props: ComponentProps) => {
	const { productsType, productsSpecification, products } = props; // data
	const { onSelect, onRemoveItem } = props; // func

	return (
		<Container>
			<HeaderContainer>
				<Title>
					{ "ПРОДУКТЫ / 25" }
				</Title>
				<SelectorContainer>
					<TitleSelect>
						{ "Тип" }
					</TitleSelect>
					<StyledSelect
						options={ productsType }
						onSelect={ e => onSelect(Selection.TYPE, e as string) }
					/>
				</SelectorContainer>
				<SelectorContainer>
					<TitleSelect>
						{ "Спецификация" }
					</TitleSelect>
					<StyledSelect
						options={ productsSpecification }
						onSelect={ e => onSelect(Selection.SPECIFICATION, e as string) }
					/>
				</SelectorContainer>
			</HeaderContainer>
			<ListContainer>
				{ products.map(el => (
					<ProductPage
						onRemoveItem={ onRemoveItem }
						item={ el }
						key={ el.id }
					/>
					))}
			</ListContainer>
		</Container>
	);
};

export default memo(Profit);