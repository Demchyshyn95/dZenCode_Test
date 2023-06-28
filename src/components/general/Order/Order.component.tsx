import { Title, Container, TimeContainer, Time, Price, PriceContainer, DeleteIcon, IconData } from "./styles";
import { MonthDayHourMinuteFormat, MonthDayYearHourMinuteFormat } from "../../../costants/Date";
import ModalComponent from "../Modal/Modal.component";
import { ComponentProps } from "./types";
import React, { FC, memo } from 'react';
import moment from "moment";

const Order: FC<ComponentProps> = (props: ComponentProps) => {
	const { onRemove, onShowModal, onCancel, changeViewDetail } = props; // func
	const { item, isShowModal } = props; // data

	return (
		<Container>
			<Title>
				{ item.title }
			</Title>
			<IconData
				title={ "Show more" }
				onClick={ () => changeViewDetail(true) }
			/>
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
			<TimeContainer>
				<Time>
					{ moment(item.date).format(MonthDayHourMinuteFormat) }
				</Time>
				<Time>
					{ moment(item.date).format(MonthDayYearHourMinuteFormat) }
				</Time>
			</TimeContainer>
			<DeleteIcon
				onClick={ onShowModal }
				title={ "Remove" }
			/>
			{ isShowModal && <ModalComponent
				{ ...
					{
						onRemove,
						onCancel,
						order: item
					}
				}
			/> }
		</Container>
	);
};

export default memo(Order);