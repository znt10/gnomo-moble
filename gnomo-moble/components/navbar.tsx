import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

export default function Navbar() {
    return (
        <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="buscar"
            placeholderTextColor="#777"
            />
            <Image
            source={require("../assets/G.png")} 
            style={styles.icon}
            />
            <Image
            source={require("../assets/lupa.png")} 
            style={styles.lupa}
            />
        </View>
        </View>

        
    );
    }

    const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: "#1c0b2b",
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        position: 'relative',
    },
    input: {
        height: 45,
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingLeft: 30, 
        textAlign: 'center',
    },
    icon: {
        width: 35,
        height: 50,
        position: 'absolute',
        left: 10,
        top:-1,
    },
    lupa: {
        width: 50,
        height: 50, 
        position: 'absolute',
        right: -7,
        top: -2,
    }

});
