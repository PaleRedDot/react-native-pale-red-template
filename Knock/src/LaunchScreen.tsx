import React, { useEffect } from "react";
import { Text, View } from "react-native";

// @ts-ignore
export default function LaunchScreen({ navigation }) {
	useEffect(() => {
		setTimeout(function () {
			navigation.reset({ routes: [{ name: "Tabs" }] });
		}, 400); //0.4 sec delayed and show tabs.
	}, []);

	return (
		<View style={{ justifyContent: "center", flex: 1 }}>
			<Text style={{ alignSelf: "center" }}>LaunchScreen</Text>
		</View>
	);
}
