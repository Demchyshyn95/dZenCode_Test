import { ProductsProvider } from "../providers/ProductsProvider";
import RootPage from "../navigation/RootPage";
import * as React from "react";
import { FC } from "react";

const App: FC = () =>
	<ProductsProvider>
		<RootPage/>
	</ProductsProvider>

export default App;
