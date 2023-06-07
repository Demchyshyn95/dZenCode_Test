import { ComponentProps } from "./types";
import { Container } from "./styles";
import React, { FC } from "react";

const Settings: FC<ComponentProps> = (props: ComponentProps): any => {
	console.log("Home [view]", props);
	return (
		<Container>
			{"Setting page"}
		</Container>
	)
};

export default Settings;