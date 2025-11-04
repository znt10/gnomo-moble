import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Nome / Logo */}
      <Image 
        source={require("../assets/nome.png")}
        style={styles.nome}
      />

      {/* Banner */}
      <Image
         source={require('../assets/banner.png')}
            style={styles.logo}
      />

      {/* Campos */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu Email"
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#b0b0b0"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Digite novamente sua senha"
        placeholderTextColor="#b0b0b0"
        secureTextEntry
      />

      {/* Botão Cadastrar */}
      <Pressable
        style={({ pressed }) => [
          styles.buttonPrimary,
          { backgroundColor: pressed ? "#607aff" : "#6f95ff" },
        ]}
        onPress={() => navigation.navigate("home" as never)}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#150322",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  nome: {
    width: 200,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10, // diminui o espaço entre nome e banner
  },
   logo: {
        width: "100%",
        height: "30%",
        resizeMode: 'contain',
        marginBottom: 30,
        borderRadius: 12,
    },
  banner: {
    width: "90%",
    height: 160,
    resizeMode: "contain",
    marginBottom: 15, // menos espaço vertical
    borderRadius: 10,
  },
  input: {
    width: "80%",
    backgroundColor: "#2d1f3b",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
    fontSize: 16,
  },
  buttonPrimary: {
    width: "70%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
