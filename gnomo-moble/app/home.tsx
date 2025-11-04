import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import Navbar from "@/components/navbar";
import TabBarCustom from "@/components/custombar";

export default function Home() {
    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Navbar />

            {/* Banner principal */}
            <Image
            source={require("../assets/bannerHome.png")}
            style={styles.banner}
            resizeMode="contain"
            />

            {/* Card do produto */}
            <Text style={{ color: "#fffafaff", fontSize: 24, fontWeight: "bold", marginLeft: 20, marginBottom: 10 }}>  Produtos em Destaque</Text>
            <View style={styles.card}>
            <Image
                source={require("../assets/monitor.png")}
                style={styles.foto}
                resizeMode="contain"
            />
            <View style={styles.info}>
                <Text style={styles.nome}>Monitor Gamer Curvo</Text>
                <Text style={styles.desc}>AOC Legend 27”, 240Hz, Full HD</Text>
                <Text style={styles.preco}>R$ 1.699,99 no Pix</Text>
            </View>
            </View>

            {/* Produtos */}
            <View style={styles.card}>
            <Image
                source={require("../assets/headset.png")}
                style={styles.foto}
                resizeMode="contain"
            />
            <View style={styles.info}>
                <Text style={styles.nome}>Headset Gamer RGB</Text>
                <Text style={styles.desc}>Redragon Ares H120, 7.1 Surround</Text>
                <Text style={styles.preco}>R$ 299,99 no Pix</Text>
            </View>
            </View>

            {/* Espaço extra para não colar na TabBar */}
            <View style={{ height: 100 }} />
        </ScrollView>

        {/* Barra fixa no fundo */}
        <TabBarCustom />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#413b6b",
    },

    scrollContent: {
        paddingBottom: 20,
    },

    banner: {
        width: "90%",
        aspectRatio: 1.8,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 10,
    },

    card: {
        flexDirection: "row",
        width: "90%",
        backgroundColor: "#5c65c0",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        marginBottom: 15,
    },

    foto: {
        width: 120,
        height: 100,
        marginRight: 15,
    },

    info: {
        flex: 1,
    },

    nome: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
        flexShrink: 1,
    },

    desc: {
        fontSize: 14,
        color: "#e0e0e0",
        marginBottom: 6,
        flexShrink: 1,
    },

    preco: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00ff7f",
    },
});
