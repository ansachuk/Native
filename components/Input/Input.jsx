import { useRef } from "react";
import { TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

export default function Input({ placeholder, type = null, hidden = false, value = "", onChangeText }) {
	const inputRef = useRef();

	return (
		<TextInput
			ref={inputRef}
			onChangeText={onChangeText}
			value={value}
			enablesReturnKeyAutomatically={true}
			autoCorrect={false}
			secureTextEntry={hidden}
			autoComplete={type && type !== "text" && type}
			inputMode={type}
			style={styles.input}
			placeholder={placeholder}
		/>
	);
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
