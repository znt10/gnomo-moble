import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>

        <View style={styles.profile}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person-outline" size={50} color="#fff" />
          </View>
          <Text style={styles.name}>José Cicero</Text>
        </View>
      </View>

      {/* Opções */}
      <View style={styles.optionList}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={28} color="#9f8bff" />
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Suas informações</Text>
            <Text style={styles.optionSubtitle}>
              Preferências e dados de identificação
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="lock-closed-outline" size={28} color="#9f8bff" />
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Segurança</Text>
            <Text style={styles.optionSubtitle}>
              Você tem configurações pendentes.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="credit-card" size={28} color="#9f8bff" />
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Cartões</Text>
            <Text style={styles.optionSubtitle}>
              Cartões salvos na sua conta.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <FontAwesome5 name="home" size={26} color="#9f8bff" />
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Endereços</Text>
            <Text style={styles.optionSubtitle}>
              Endereços salvos na sua conta.
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Botão Sair */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>SAIR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#150322", // fundo escuro igual ao login/home
  },
  header: {
    backgroundColor: "#2a1e3d", // tom roxo escuro do topo
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    position: "relative",
    borderBottomWidth: 1,
    borderColor: "#5b3ba3",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 65,
  },
  profile: {
    alignItems: "center",
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#5b3ba3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#7affb2",
  },
  name: {
    color: "#f5f5f5",
    fontSize: 20,
    fontWeight: "700",
  },
  optionList: {
    padding: 25,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    backgroundColor: "#2d1f3b",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    borderWidth: 1,
    borderColor: "#3b2a60",
  },
  optionText: {
    marginLeft: 15,
    flexShrink: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  optionSubtitle: {
    fontSize: 13,
    color: "#b8b8b8",
    marginTop: 2,
  },
  logoutButton: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 60,
  },
  logoutText: {
    color: "#ff4c4c",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
});
