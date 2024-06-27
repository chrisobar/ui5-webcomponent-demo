import { Card, CardHeader, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import { useState } from "react";

export function MyCard() {
	const dataset = [
		{ month: "January", data: 65 },
		{ month: "February", data: 59 },
		{ month: "March", data: 80 },
		{ month: "April", data: 81 },
		{ month: "May", data: 56 },
		{ month: "June", data: 55 },
	];

	const [toggleChart, setToggleChart] = useState("lineChart");
	const [loading, setLoading] = useState(false);
	function onChangeChart(e) {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setToggleChart(e.target.value);
		}, 2000);
	}
	return (
		<>
			<p>
				<input
					type="radio"
					value="lineChart"
					checked={toggleChart === "lineChart"}
					onChange={onChangeChart}
				/>
				Line Chart
			</p>
			<p>
				<input
					type="radio"
					value="barChart"
					checked={toggleChart === "barChart"}
					onChange={onChangeChart}
				/>
				Bar Chart
			</p>

			<Card
				header={
					<CardHeader
						titleText={toggleChart === "lineChart" ? "Line Chart" : "Bar Chart"}
						subtitleText="List"
						interactive
						onClick={() => {
							alert("clicked");
						}}
						draggable={true}
					/>
				}
				style={{ width: "300px", ...spacing.sapUiContentPadding }}
			>
				<Text style={spacing.sapUiContentPadding}>This is content of area</Text>
				{/* accessors are based on the array fields above -> const dataset = [] */}
				{toggleChart === "lineChart" ? (
					<LineChart
						dimensions={[{ accessor: "month" }]}
						measures={[{ accessor: "data", label: "Stock Price" }]}
						dataset={dataset}
						loading={loading}
					/>
				) : (
					<BarChart
						dimensions={[{ accessor: "month" }]}
						measures={[{ accessor: "data", label: "Stock Price" }]}
						dataset={dataset}
						loading={loading}
					/>
				)}
			</Card>
		</>
	);
}
