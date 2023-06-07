import { Title, Container, DescriptionContainer, Logo, StatusStyle, Circle, TimeContainer, StyledIcon,
	Time, StatusProduct, Price, PriceContainer } from "./styles";
import ModalComponent from "../Modal/Modal.component";
import { Status } from "../../../costants";
import { ComponentProps } from "./types";
import React, { FC } from 'react';

const ProductComponent: FC<ComponentProps> = (props: ComponentProps) => {
	const { onRemove, onShowModal, onCancel } = props; // func
	const { item, isShowModal } = props; // data

	return (
		<Container>
			<Circle
				isNew={ item.isNew }
			/>
			<Logo
				src={ item.photo }
			/>
			<DescriptionContainer>
				<Title>
					{ item.title }
				</Title>
				<Title>
					{ item.type }
				</Title>
			</DescriptionContainer>
			<StatusStyle
				isFree={ item.status.toUpperCase() === Status.FREE.toUpperCase() }
			>
				{ item.status }
			</StatusStyle>
			<TimeContainer>
				<Time>
					{ `c:   ${ item.guarantee.start }` }
				</Time>
				<Time>
					{ `до:   ${ item.guarantee.end }` }
				</Time>
			</TimeContainer>
			<StatusProduct>
				{ item.isNew ? "Новый" : "Б / У" }
			</StatusProduct>
			<PriceContainer>
				{
					item.price.map(el => (
						<Price
							key={ el.value }
						>
							{ `${ el.value } ${ el.symbol }` }
						</Price>
					))
				}
			</PriceContainer>
			<Time>
				{ item.date }
			</Time>
			<StyledIcon
				onClick={ onShowModal }
				title={ "Remove" }
			/>
			{ isShowModal && <ModalComponent
				{ ...
					{
						onRemove,
						onCancel,
						item
					}
				}
			/> }
		</Container>
	);
};

export default ProductComponent;