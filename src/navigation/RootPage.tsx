import LayoutPage from "../components/general/Layout/LayoutPage";
import ErrorPage from "../components/general/Error/Error.page.";
import { Routes, Route, Navigate } from 'react-router-dom';
import SettingsPage from "../pages/Settings/Settings.page";
import ProductsPage from "../pages/Products/Products.page";
import ParishesPage from "../pages/Parishes/Parishes.page";
import UsersPage from "../pages/Users/Users.page";
import { RoutesURL } from "./types";
import React, { FC } from "react";

const RootPage: FC = (): React.ReactElement => {
	return (
				<LayoutPage>
					<Routes>
						<Route
							path={ RoutesURL.PRODUCTS }
							element={ <ProductsPage/> }
						/>
						<Route
							path={ RoutesURL.PARISHES }
							element={ <ParishesPage/> }
						/>
						<Route
							path={ RoutesURL.SETTINGS }
							element={ <SettingsPage/> }
						/>
						<Route
							path={ RoutesURL.USERS }
							element={ <UsersPage/> }
						/>
						<Route
							path={ RoutesURL.ERROR }
							element={ <ErrorPage/> }
						/>
						<Route
							element={ <Navigate to={ RoutesURL.PARISHES } replace/> }
							path={ "*" }
						/>
					</Routes>
				</LayoutPage>
	)
};

export default RootPage;
