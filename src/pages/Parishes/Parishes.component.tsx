import { Container, HeaderContainer, Title, ListContainer, StyledPlusCircleTwoTone } from "./styles";
import DetailsPage from "../../components/general/Detail/Details,page";
import OrderPage from "../../components/general/Order/Order.page";
import { ComponentProps } from "./types";
import React, { FC, memo } from 'react';

const Parishes: FC<ComponentProps> = (props: ComponentProps) => {
	const { orders, isViewDetail, changeViewDetail } = props; // data
	console.log(props);
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
				{ isViewDetail ? (
					<DetailsPage
						setIsShowDetail={ changeViewDetail }
					/>
				) : orders.map(el => (
						<OrderPage
							item={ el }
							key={ el.id }
						/>
					))
				}
			</ListContainer>
		</Container>
	);
};

export default memo(Parishes);