import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from "react-native";

import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import PostsScreen from "./screens/PostsScreen/PostsScreen";

export default function App() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<ImageBackground style={styles.image} resizeMode="cover" source={require("./img/startScreenBG.webp")}>
					{/* <RegistrationScreen /> */}
					<LoginScreen />
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	image: {
		flex: 1,
		justifyContent: "center",
	},
});
