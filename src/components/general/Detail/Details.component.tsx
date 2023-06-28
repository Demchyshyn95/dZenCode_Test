import { Title, ContentOrders, TimeContainer, Time, IconData, ContainerProducts, Content, ContainerOrders,
	Circle, Logo, DescriptionContainer, StatusStyle, ContentProducts, OrderTitle, StyledPlusCircleTwoTone,
	PlusTitle, PlusContainer, StyledCloseCircleFilled, IconRightSquareTwoTone } from "./styles";
import { MonthDayHourMinuteFormat, MonthDayYearHourMinuteFormat } from "../../../costants/Date";
import ModalComponent from "../Modal/Modal.component";
import { products, Status } from "../../../costants";
import { ComponentProps } from "./types";
import React, { FC, memo } from 'react';
import moment from "moment";

const Details: FC<ComponentProps> = (props: ComponentProps) => {
	const { onRemove, onCancel, setIsShowDetail } = props; // func
	const { isShowModal, orders } = props; // data

	return (
		<Content>
			<StyledCloseCircleFilled
				twoToneColor={"silver"}
				onClick={ onCancel }
			/>
			<ContainerOrders>
				{ orders.map( item => (
					<ContentOrders>
						<Title>
							{ item.title }
						</Title>
						<IconData
							title={ "Hide more" }
							onClick={ () => setIsShowDetail(false) }
						/>
						<TimeContainer>
							<Time>
								{ moment(item.date).format(MonthDayHourMinuteFormat) }
							</Time>
							<Time>
								{ moment(item.date).format(MonthDayYearHourMinuteFormat) }
							</Time>
						</TimeContainer>
						<IconRightSquareTwoTone
							twoToneColor={"silver"}
						/>
					</ContentOrders>
				) )}
			</ContainerOrders>
			<ContainerProducts>
				<OrderTitle>
					{"ПРОДУКТИ"}
				</OrderTitle>
				<PlusContainer>
					<StyledPlusCircleTwoTone
						twoToneColor={"green"}
					/>
					<PlusTitle>
						{"Добавить продукт"}
					</PlusTitle>
				</PlusContainer>
				{ products.map(item => (
					<ContentProducts>
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
						{ isShowModal && <ModalComponent
							{ ...
								{
									onRemove,
									onCancel,
									product: item
								}
							}
						/> }
					</ContentProducts>
				))}
			</ContainerProducts>
		</Content>
	);
};

export default memo(Details);