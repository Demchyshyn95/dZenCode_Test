import React, { FC } from 'react';
import { StyledResult } from "./styles";

const Error: FC = () => {
	return (
		<StyledResult
			subTitle={ "Sorry, something went wrong." }
			status={ "500" }
			title={ "500" }
		/>
	);
};

export default Error;