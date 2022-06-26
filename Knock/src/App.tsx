import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import LaunchScreen from "./LaunchScreen";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name={"LaunchScreen"} component={LaunchScreen} />
				<Stack.Screen name={"Tabs"} component={Tabs} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
