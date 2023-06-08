import { Container, HeaderContainer, Title, ListContainer, StyledPlusCircleTwoTone } from "./styles";
import OrderPage from "../../components/general/Order/Order.page";
import { ComponentProps } from "./types";
import React, { FC, memo } from 'react';

const Parishes: FC<ComponentProps> = (props: ComponentProps) => {
	const { orders } = props; // data

	return (
		<Container>
			<HeaderContainer>
				<StyledPlusCircleTwoTone
					twoToneColor={"green"}
				/>
				<Title>
					{ "ПРИХОДЫ / 25" }
				</Title>
			</HeaderContainer>
			<ListContainer>
				{ orders.map(el => (
					<OrderPage
						item={ el }
						key={ el.id }
					/>
					))}
			</ListContainer>
		</Container>
	);
};

export default memo(Parishes);