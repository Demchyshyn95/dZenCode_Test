import { BrowserRouter } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import App from "./root/App";
import "./index.css"
import React from "react";

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
);





