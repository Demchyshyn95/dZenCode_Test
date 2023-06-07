import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Input, Layout } from "antd";

export const Header = styled.div`
	width: 100%;
	height: 150px;
	padding: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: white;
`;

export const Logo = styled.img``;
export const Title = styled.div`
	text-transform: uppercase;
	font-weight: 600;
`;
export const Information = styled(Title)`
	font-weight: 600;
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledInput = styled(Input)`
	width: 30%;
`;
export const MenuItem = styled.div`
	padding: 50px 0 50px;
	height: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 20px;
	&& a {
		color: black;
		margin-top: 30px;
		:hover {
			color: silver;
		}
	}  
	`;
export const StyledSider = styled.div`
	min-height: 500px;
	padding-top: 50px;
	width: 250px;
	display: flex;
	align-items: center;
	flex-flow: column;
	background: white;
`;

export const StyledLayout = styled(Layout)``;
export const StyledContent = styled(Content)`
	background: #f3f3f3;
	min-height: 500px;
`;
export const Container = styled.div`
	display: flex;
	height: 650px;
`;

export const StyledAvatar = styled(Logo)`
	width: 150px;
	height: 150px;
`;

export const StyledLink = styled(Link)<{ isactive: boolean }>`
	border-bottom: ${({ isactive })  => (isactive ? "5px solid #000" : "none") };
`;

export const TimeContainer = styled.div`
	display: flex;
	flex-flow: column;
`;

