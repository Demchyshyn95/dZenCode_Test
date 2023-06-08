import { StyledIcon, SecondBlock, FirstBlock, Title, RemoveBtn, CancelBtn, Content, StyledCloseCircleFilled, Circle,
	Logo, DescriptionContainer, Container, HeaderContainer, HeaderTitle } from "./styles";
import { ButtonType } from "../../../costants";
import { ComponentProps } from "./types";
import React, { FC } from 'react';

const ModalComponent: FC<ComponentProps> = (props: ComponentProps) => {
	const { onRemove, onCancel } = props; // func

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
					{ props.product ? (
						<Container>
							<Circle
								isNew={ props.product.isNew }
							/>
							<Logo
								src={ props.product.photo }
							/>
							<DescriptionContainer>
								<Title>
									{ props.product.title }
								</Title>
								<Title>
									{ props.product.type }
								</Title>
							</DescriptionContainer>
						</Container>
					) : (
						<Container>
							<DescriptionContainer>
								<Title>
									{ props.order?.title }
								</Title>
							</DescriptionContainer>
						</Container>
					)}
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