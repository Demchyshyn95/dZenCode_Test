import { StyledResult } from "./styles";
import React, { FC } from 'react';

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