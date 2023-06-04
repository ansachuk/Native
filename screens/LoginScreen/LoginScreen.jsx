import React from "react";
import { StyleSheet, Text } from "react-native";

import Main from "../../components/Main/Main";

export default function LoginScreen() {
	return (
		<Main height="70">
			<Text style={styles.title}>Реєстрація</Text>
		</Main>
	);
}

const styles = StyleSheet.create({
	title: {
		// fontFamily: "Roboto",
		marginTop: 40,

		fontWeight: 500,
		fontSize: 36,
		lineHeight: 35,
		textAlign: "center",

		color: "#212121",

		// position: "relative",
		// top: -28,
	},
});
