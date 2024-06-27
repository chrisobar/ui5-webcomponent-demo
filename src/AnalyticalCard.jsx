import {
	AnalyticalTable,
	Card,
	CardHeader,
	Icon,
} from "@ui5/webcomponents-react";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";
import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";

export default function AnalyticalCard() {
	const tableData = new Array(500).fill(null).map((_, index) => {
		return {
			name: `name${index}`,
			age: Math.floor(Math.random() * 100),
			friend: {
				name: `friend.Name${index}`,
				age: Math.floor(Math.random() * 100),
			},
		};
	});

	const tableColumns = [
		{
			Header: "Name",
			accessor: "name", // String-based value accessors!
		},
		{
			Header: "Age",
			accessor: "age",
		},
		{
			Header: "Friend Name",
			accessor: "friend.name",
		},
		{
			Header: "Friend Age",
			accessor: "friend.age",
		},
	];

	return (
		<Card
			header={
				<CardHeader
					titleText="AnalyticalTable"
					avatar={<Icon name={tableViewIcon} />}
				/>
			}
			style={{ ...spacing.sapUiContentPadding }}
		>
			<AnalyticalTable
				columns={tableColumns}
				data={tableData}
				visibleRows={5}
			/>
		</Card>
	);
}
