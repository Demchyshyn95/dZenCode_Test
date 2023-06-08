import { DeleteOutlined, UnorderedListOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Container = styled.div`
	width: 1080px;
	height: 50px;
	overflow: auto;
	margin: 20px 0;
	background: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-transform: uppercase;
`;

export const Title = styled.div`
	margin-left: 20px;
	font-weight: 600;
`;

export const TimeContainer = styled.div`
	margin-left: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100%;
	width: 155px;
`;
export const PriceContainer = styled(TimeContainer)``;
export const Time = styled.span``;
export const DeleteIcon = styled(DeleteOutlined)`
	font-size: 20px;
	cursor: pointer;
`;

export const IconData = styled(UnorderedListOutlined)`
	font-size: 20px;
	cursor: pointer;
`;
export const Price = styled(Time)``;