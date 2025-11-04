// components/CustomBar.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CustomBar() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("home" as never)}>
            <Text style={styles.text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil" as never)}>
            <Text style={styles.text}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil" as never)}>
            <Text style={styles.text}>Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil" as never)}>
            <Text style={styles.text}>Perfil</Text>
        </TouchableOpacity>

        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#1c0b2b",
        paddingVertical: 10,
        position: "absolute",  // 👈 fixa a barra
        bottom: 0,              // 👈 gruda no fundo
        left: 0,
        right: 0,
    },
    text: { color: "#fff", fontSize: 16 },
});
