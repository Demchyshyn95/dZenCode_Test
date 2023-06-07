import { DeleteTwoTone } from "@ant-design/icons";
import styled from "styled-components";

export const Container = styled.div`
	width: 1080px;
	height: 50px;
	overflow: auto;
	margin: 20px 0;
	background: white;
	display: flex;
	justify-content: left;
	align-items: center;
	text-transform: uppercase;
`;

export const Circle = styled.div<{ isNew: boolean }>`
	margin-left: 30px;
	height: 10px;
	width: 10px;
	background-color: ${({ isNew }) => (isNew ? "green" : "#bbb")};
	border-radius: 50%;
	display: inline-block;
`;
export const Title = styled.div``;

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
export const StyledIcon = styled(DeleteTwoTone)`
	margin-left: 30px;
	font-size: 20px;
`;
export const Price = styled(Time)``;
export const StatusProduct = styled.div`
	margin-left: 30px;
	width: 50px;
`;