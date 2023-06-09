import { Container, HeaderContainer, Title, StyledSelect, SelectorContainer, TitleSelect, ListContainer } from "./styles";
import ProductPage from "../../components/general/Product/Product.page";
import { Selection } from "../../costants";
import { ComponentProps } from "./types";
import React, { FC, memo } from 'react';

const Products: FC<ComponentProps> = (props: ComponentProps) => {
	const { productsType, productsSpecification, products, specificationProduct, typeProduct } = props; // data
	const { onSelect } = props; // func

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
						value={ typeProduct }
						options={ productsType }
						onSelect={ e => onSelect(Selection.TYPE, e as string) }
					/>
				</SelectorContainer>
				<SelectorContainer>
					<TitleSelect>
						{ "Спецификация" }
					</TitleSelect>
					<StyledSelect
						value={ specificationProduct }
						options={ productsSpecification }
						onSelect={ e => onSelect(Selection.SPECIFICATION, e as string) }
					/>
				</SelectorContainer>
			</HeaderContainer>
			<ListContainer>
				{ products.map(el => (
					<ProductPage
						item={ el }
						key={ el.id }
					/>
					))}
			</ListContainer>
		</Container>
	);
};

export default memo(Products);