import { Provider } from "../providers/Provider";
import RootPage from "../navigation/RootPage";
import * as React from "react";
import { FC } from "react";

const App: FC = () =>
	<Provider>
		<RootPage/>
	</Provider>

export default App;
