import LayoutPage from "../components/general/Layout/LayoutPage";
import ErrorPage from "../components/general/Error/Error.page.";
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from "../pages/Products/Products.page";
import SettingsPage from "../pages/Settings/Settings.page";
import ProfitPage from "../pages/Profit/Profit.page";
import GroupsPage from "../pages/Groups/Groups.page";
import { RoutesURL } from "./types";
import React, { FC } from "react";

const RootPage: FC = (): React.ReactElement => {
	return (
				<LayoutPage>
					<Routes>
						<Route
							path={ RoutesURL.PROFIT }
							element={ <ProfitPage/> }
						/>
						<Route
							path={ RoutesURL.PRODUCTS }
							element={ <ProductsPage/> }
						/>
						<Route
							path={ RoutesURL.GROUPS }
							element={ <GroupsPage/> }
						/>
						<Route
							path={ RoutesURL.SETTINGS }
							element={ <SettingsPage/> }
						/>
						<Route
							path={ RoutesURL.USERS }
							element={ <GroupsPage/> }
						/>
						<Route
							path={ RoutesURL.ERROR }
							element={ <ErrorPage/> }
						/>
						<Route
							element={ <Navigate to={ RoutesURL.PROFIT } replace/> }
							path={ "*" }
						/>
					</Routes>
				</LayoutPage>
	)
};

export default RootPage;
