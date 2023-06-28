import { CloseCircleTwoTone, DeleteOutlined, PicCenterOutlined, PlusCircleTwoTone, RightSquareTwoTone } from "@ant-design/icons";
import styled from "styled-components";

export const ContentOrders = styled.div`
	width: 400px;
	height: 50px;
	overflow: auto;
	margin: 20px 0;
	background: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-transform: uppercase;
`;

export const ContentProducts = styled.div`
	width: 800px;
	height: 50px;
	overflow: auto;
	margin: 20px 0;
	background: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-transform: uppercase;
	border-bottom: 1px silver;
`;

export const Title = styled.div`
	margin-left: 20px;
	font-weight: 600;
`;

export const OrderTitle = styled(Title)`
	font-size: 24px;
	margin: 20px 0 40px 20px;
	text-align: center;
`;

export const TimeContainer = styled.div`
	margin-left: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100%;
	width: 155px;
`;
export const Time = styled.span``;
export const DeleteIcon = styled(DeleteOutlined)`
	font-size: 20px;
	cursor: pointer;
`;
export const IconRightSquareTwoTone = styled(RightSquareTwoTone)`
	font-size: 32px;
	cursor: pointer;
`;

export const IconData = styled(PicCenterOutlined)`
	font-size: 20px;
	cursor: pointer;
`;
export const Price = styled(Time)``;
export const ContainerProducts = styled.div`
	position: relative;
	background: white;
	margin: 20px 0 0 20px;
	height: 400px;
`;
export const ContainerOrders = styled.div``;
export const Content = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
`;

import { DeleteTwoTone } from "@ant-design/icons";


export const Circle = styled.div<{ isNew: boolean }>`
	margin-left: 30px;
	height: 10px;
	width: 10px;
	background-color: ${({ isNew }) => (isNew ? "green" : "#bbb")};
	border-radius: 50%;
	display: inline-block;
`;

export const Logo = styled.img`
	margin-left: 30px;
	width: 50px;
	height: 50px;
`;

export const DescriptionContainer = styled.span`
	display: flex;
	flex-direction: column;
	margin-left: 30px;
	justify-content: space-around;
	height: 100%;
`;

export const StatusStyle = styled.div<{ isFree: boolean }>`
	margin-left: 30px;
	font-size: 18px;
	color: ${({ isFree }) => (isFree ? "black" : "green")};
	width: 100px;
`;

export const StyledIcon = styled(DeleteTwoTone)`
	margin-left: 30px;
	font-size: 20px;
`;
export const StatusProduct = styled.div`
	margin-left: 30px;
	width: 50px;
`;

export const StyledPlusCircleTwoTone = styled(PlusCircleTwoTone)`
	font-size: 20px;
	cursor: pointer;
	margin: 0 20px 0 20px;
`;

export const PlusTitle = styled.span`
	font-weight: 600;
	font-size: 18px;
	color: green;
`;
export const PlusContainer = styled.div`
	margin-left: 35px;
	display: flex;
	position: relative;
	justify-content: left;
	align-items: center;
	cursor: pointer;
	width: fit-content;
	margin-bottom: 40px;
`;

export const StyledCloseCircleFilled = styled(CloseCircleTwoTone)`
	font-size: 32px;
	position: absolute;
	cursor: pointer;
	top: 6px;
	bottom: 0;
	z-index: 100;
	right: 0;
	left: 1203px;

`;