import { TextInput, StyleSheet } from "react-native";

export default function Input({ placeholder }) {
	return <TextInput style={styles.input} placeholder={placeholder} />;
}

const styles = StyleSheet.create({
	input: {
		height: 50,

		padding: 16,
		backgroundColor: "#F6F6F6",
		borderRadius: 8,

		borderWidth: 1,
		borderStyle: "solid",
		// borderColor: isFocused() ? "#FF6C00" : "#E8E8E8",
		borderColor: "#E8E8E8",
		marginBottom: 16,
	},
});
