import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./tabs/home/HomeScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name={"HomeScreen"} component={HomeScreen} />
		</Tab.Navigator>
	);
}
