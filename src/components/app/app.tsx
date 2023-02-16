import React from "react";
import { Props } from "./app.types";

const App: React.FunctionComponent<Props> = ({ content }) => {
	return <div data-testid="app">{content}</div>;
};

export default App;
