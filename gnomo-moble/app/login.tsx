import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
        const navigation = useNavigation();


    return (
        <View style={styles.container}>
        <Image 
        source={require("../assets/nome.png")}
        style={styles.nome}
        />

        <Image
            source={require('../assets/banner.png')}
            style={styles.logo}
        />

        {/* Campo de usuário */}
        <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            placeholderTextColor="#b0b0b0"
        />

        {/* Campo de senha */}
        <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#b0b0b0"
            secureTextEntry={true}
        />

        <Pressable
            style={({ pressed }) => [
            styles.buttonPrimary,
            { backgroundColor: pressed ? '#5c65c0' : '#6f95ff' },
            ]}
        ><TouchableOpacity onPress={() => navigation.navigate("home" as never)}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </Pressable>

        <Pressable
            style={({ pressed }) => [
            styles.buttonSecondary,
            { backgroundColor: pressed ? '#413b6b' : '#301c41' },
            ]}
        >
            <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
        </View>
    );
    }

    const styles = StyleSheet.create({
    nome:{
        width: 200,
        height: 80,
        resizeMode: 'contain',
    },

    container: {
        flex: 1,
        backgroundColor: '#1c0b2b', // fundo principal escuro
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        color: '#6f95ff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    logo: {
        width: "100%",
        height: "30%",
        resizeMode: 'contain',
        marginBottom: 30,
        borderRadius: 12,
    },
    input: {
        width: '85%',
        backgroundColor: '#413b6b',
        color: '#fff',
        padding: 12,
        borderRadius: 10,
        marginVertical: 8,
        fontSize: 16,
    },
    buttonPrimary: {
        width: '75%',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 25,
        alignItems: 'center',
        elevation: 3,
    },
    buttonSecondary: {
        width: '75%',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 15,
        alignItems: 'center',
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
