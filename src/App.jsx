import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyCard } from "./Card";
import {
	ShellBar,
	ShellBarItem,
	FlexBox,
	FlexBoxJustifyContent,
	FlexBoxWrap,
} from "@ui5/webcomponents-react";
import AnalyticalCard from "./AnalyticalCard";
import ProgressCard from "./ProgressCard";
import { spacing } from "@ui5/webcomponents-react-base";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
function App() {
	const navigate = useNavigate();
	return (
		<div>
			<ShellBar
				logo={
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/SAP-Logo.svg/1280px-SAP-Logo.svg.png" />
				}
				profile={
					<img
						src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
						width={50}
						height={50}
					/>
				}
				primaryTitle="My App"
				onLogoClick={() => navigate("./")}
			>
				<ShellBarItem icon="add" text="Add" />
			</ShellBar>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="detail" element={<Detail />} />
				<Route path="*" element={<Navigate replace to="/home" />} />
			</Routes>
		</div>
	);
}

export default App;
