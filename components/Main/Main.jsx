import React from "react";
import { StyleSheet, View } from "react-native";

export default function Main({ height, children }) {
	return (
		<View height={`${height}%`} style={styles.main}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		width: "100%",
		marginTop: "auto",
		paddingHorizontal: 16,
		backgroundColor: "#fff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
});
