import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from "./src/navigators/appNavigator";
import useLocalFonts from "./src/hooks/useLocalFonts";
import {AppProvider} from "./src/contexts/contextProvider";

import { Text } from "react-native";

export default function App() {

	const loadedFont = useLocalFonts();
	
	if (!loadedFont)
		return null;

	return (
		<SafeAreaProvider>
			<AppProvider>
				<Navigation />
			</AppProvider>
			
			<StatusBar style="light"  translucent={true} />
		</SafeAreaProvider>
	);
}
