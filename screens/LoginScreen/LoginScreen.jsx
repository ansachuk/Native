import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";

import Main from "../../components/Main/Main";
import Input from "../../components/Input/Input";
import ClassicButton from "../../components/ClassicButton/ClassicButton";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const onLogInPress = () => {
		console.log("Login info =>", { email, pass });
		setEmail("");
		setPass("");
	};

	return (
		<Main height="60">
			<Text style={styles.title}>Увійти</Text>
			<Input type="email" placeholder="Адреса електронної пошти" onChangeText={setEmail} value={email} />
			<Input placeholder="Пароль" hidden onChangeText={setPass} value={pass} />
			<ClassicButton title="Увійти" onPress={onLogInPress} />
			<Button color="#1B4371" style={styles.btn} title="Немає акаунту? Зареєструватися" />
		</Main>
	);
}

const styles = StyleSheet.create({
	title: {
		// fontFamily: "Roboto",
		marginVertical: 32,
		fontWeight: 500,
		fontSize: 36,
		lineHeight: 35,
		textAlign: "center",

		color: "#212121",

		// position: "relative",
		// top: -28,
	},
});
