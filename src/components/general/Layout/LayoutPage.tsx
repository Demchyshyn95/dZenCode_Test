import { MonthDayYearHourMinuteFormat } from "../../../costants/Date";
import { useLocation } from "react-router-dom";
import Layout from "./Layout.component";
import { PageProps } from "./types";
import moment from "moment/moment";
import React, { FC } from 'react';

const LayoutPage: FC<PageProps> = (props: PageProps) => {
	const { children } = props; // data

	const timeToday = moment().format(MonthDayYearHourMinuteFormat);
	const { pathname } = useLocation()

	return (
		<Layout
			{...
				{
					timeToday,
					children,
					pathname
				}
		}
		/>
	);
};

export default LayoutPage;