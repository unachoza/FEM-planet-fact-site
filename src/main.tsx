import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/mercury" element={<App />} />
			<Route path="/venus" element={<App />} />
			<Route path="/earth" element={<App />} />
			<Route path="/mars" element={<App />} />
			<Route path="/jupiter" element={<App />} />
			<Route path="/saturn" element={<App />} />
			<Route path="/uranus" element={<App />} />
			<Route path="/neptune" element={<App />} />
		</Routes>
	</BrowserRouter>
);
