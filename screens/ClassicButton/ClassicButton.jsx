import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ClassicButton({ title }) {
	return (
		<TouchableOpacity activeOpacity={0.6} style={styles.button}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		marginTop: 42,
		width: "100%",
		paddingVertical: 16,
		paddingHorizontal: 32,
		backgroundColor: "tomato",

		borderRadius: 100,

		marginBottom: 16,
	},

	text: {
		color: "#FFFFFF",
		fontSize: 16,
		lineHeight: 19,

		textAlign: "center",
	},
});
