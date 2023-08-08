import { useState } from "react";
import { StyleSheet, Text, Image, Button, KeyboardAvoidingView } from "react-native";

import Main from "../../components/Main/Main";
import Input from "../../components/Input/Input";
import ClassicButton from "../../components/ClassicButton/ClassicButton";

export default function RegistrationScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const onRegistrationPress = () => {
		console.log("ref info =>", { name, email, pass });

		setName("");
		setEmail("");
		setPass("");
	};

	return (
		<Main height="70">
			<Image style={styles.userImage}></Image>
			<Text type="text" style={styles.title}>
				Реєстрація
			</Text>

			<Input placeholder="Логін" value={name} onChangeText={setName} />
			<Input type="email" placeholder="Адреса електронної пошти" value={email} onChangeText={setEmail} />
			<Input placeholder="Пароль" hidden value={pass} onChangeText={setPass} />
			<ClassicButton title="Зареєстуватися" onPress={onRegistrationPress} />
			<Button color="#1B4371" style={styles.btn} title="Вже є акаунт? Увійти" />
		</Main>
	);
}

const styles = StyleSheet.create({
	userImage: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
		marginLeft: "auto",
		marginRight: "auto",
		position: "relative",
		top: -60,
	},

	title: {
		// fontFamily: "Roboto",

		fontWeight: 500,
		fontSize: 36,
		lineHeight: 35,
		textAlign: "center",

		color: "#212121",

		position: "relative",
		top: -28,
	},
});
