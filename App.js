import { useState } from "react";
import {
	StyleSheet,
	View,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";

import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import PostsScreen from "./screens/PostsScreen/PostsScreen";

export default function App() {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				keyboardVerticalOffset={Keyboard.isVisible() ? 200 : 0}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<View style={styles.container}>
					<ImageBackground style={styles.image} resizeMode="cover" source={require("./img/startScreenBG.webp")}>
						<RegistrationScreen />
						{/* <LoginScreen /> */}
					</ImageBackground>
				</View>
			</KeyboardAvoidingView>
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
