import { StyledIcon, SecondBlock, FirstBlock, Title, RemoveBtn, CancelBtn, Content, StyledCloseCircleFilled, Circle,
	Logo, DescriptionContainer, Container, HeaderContainer, HeaderTitle } from "./styles";
import { ButtonType } from "../../../costants";
import { ComponentProps } from "./types";
import React, { FC } from 'react';

const ModalComponent: FC<ComponentProps> = (props: ComponentProps) => {
	const { onRemove, onCancel } = props; // func
	const { item } = props; // data

	return (
			<Content>
				<FirstBlock>
					<HeaderContainer>
						<HeaderTitle>
							{"Вы уверены, что хотите удалить етот приход?"}
						</HeaderTitle>
						<StyledCloseCircleFilled
							onClick={ onCancel }
						/>
					</HeaderContainer>
					<Container>
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
					</Container>
				</FirstBlock>
				<SecondBlock>
					<CancelBtn
						type={ ButtonType.LINK}
						onClick={ onCancel }
					>
						{"Отменить"}
					</CancelBtn>
					<RemoveBtn
						onClick={ onRemove }
					>
						<StyledIcon
							title={ "Remove" }
						/>
						{"Удалить"}
					</RemoveBtn>
				</SecondBlock>
			</Content>
	);
};

export default ModalComponent;