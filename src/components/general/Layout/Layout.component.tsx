import { StyledLayout, Header, StyledInput, MenuItem, Logo, Title, LogoContainer, Information, StyledSider, StyledContent,
	Container, StyledAvatar, StyledLink, TimeContainer } from "./styles";
import { MainMenu } from "../../../costants/Menus";
import { ComponentProps } from "./types";
import React, { FC } from 'react';

const Layout: FC<ComponentProps> = (props: ComponentProps) => {
	const { children, pathname, timeToday } = props; // data

	return (
		<StyledLayout>
			<Header>
				<LogoContainer>
					<Logo
						src={ require(`../../../assets/images/_1.png`) }
					/>
					<Title>
						{ "Inventory" }
					</Title>
				</LogoContainer>
				<StyledInput
					placeholder={ "Поиск" }
				/>
				<TimeContainer>
					<Title>
						{ "Today" }
					</Title>
					<Information>
						{ timeToday }
					</Information>
				</TimeContainer>
			</Header>
			<Container>
				<StyledSider>
					<StyledAvatar
						src={ require(`../../../assets/images/ava_1.png`) }
					/>
					<MenuItem>
						{ MainMenu.map(({ key, title, link }) => (
							<StyledLink
								isactive={ pathname.toUpperCase() === link.toUpperCase() }
								key={ key }
								to={ link }
							>
								{ title }
							</StyledLink>
						)) }
					</MenuItem>
				</StyledSider>
				<StyledContent>
					{ children }
				</StyledContent>
			</Container>
		</StyledLayout>
	);
};

export default Layout;