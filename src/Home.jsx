import React from "react";
import { MyCard } from "./Card";
import ProgressCard from "./ProgressCard";
import AnalyticalCard from "./AnalyticalCard";
import {
	FlexBox,
	FlexBoxJustifyContent,
	FlexBoxWrap,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
export default function Home() {
	return (
		<FlexBox
			justifyContent={FlexBoxJustifyContent.Center}
			wrap={FlexBoxWrap.Wrap}
			style={spacing.sapUiContentPadding}
		>
			<MyCard />
			<ProgressCard />
			<AnalyticalCard />
		</FlexBox>
	);
}
