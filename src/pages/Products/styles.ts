import styled from "styled-components";
import { Select } from "antd";

export const Container = styled.div`
	margin: 50px;
`;
export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1080px;
`;
export const ListContainer = styled.div`
	margin-top: 50px;
`;
export const SelectorContainer = styled.div`
	font-size: 17px;
	width: 300px;
	display: flex;
	align-items: center;
`;
export const StyledSelect = styled(Select)`
	width: 200px;
`;
export const Title = styled.div`
	font-weight: 600;
	font-size: 21px;
`;

export const TitleSelect = styled(Title)`
	font-size: 18px;
	padding-right: 10px;
`;
