import {
	Card,
	CustomListItem,
	ProgressIndicator,
	StandardListItem,
	List,
	FlexBox,
	ValueState,
	FlexBoxJustifyContent,
	FlexBoxDirection,
	CardHeader,
	Text,
	Icon,
} from "@ui5/webcomponents-react";
import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import { useNavigate } from "react-router-dom";

export default function ProgressCard() {
	const navigate = useNavigate();
	return (
		<Card
			header={
				<CardHeader
					titleText="Progress"
					avatar={<Icon name={listIcon} />}
					interactive
					onClick={() => {
						navigate("/detail");
					}}
				/>
			}
			style={{ width: "300px", ...spacing.sapUiContentPadding }}
		>
			<List>
				<StandardListItem
					additionalText="finished"
					additionalTextState={ValueState.Success}
				>
					Activity 1
				</StandardListItem>
				<StandardListItem
					additionalText="failed"
					additionalTextState={ValueState.Error}
				>
					Activity 2
				</StandardListItem>
				<CustomListItem>
					<FlexBox
						direction={FlexBoxDirection.Column}
						style={{ width: "100%", ...spacing.sapUiSmallMarginTopBottom }}
					>
						<FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
							<Text style={{ fontSize: "20px" }}>Activity 3</Text>
							<Text style={{ color: "red" }}>In-progress</Text>
						</FlexBox>

						<ProgressIndicator
							value={89}
							valueState={ValueState.Success}
							style={{ ...spacing.sapUiTinyMarginTop }}
						/>
					</FlexBox>
				</CustomListItem>
				<CustomListItem>
					<ProgressIndicator value={5} valueState={ValueState.Error} />
				</CustomListItem>
			</List>
		</Card>
	);
}
