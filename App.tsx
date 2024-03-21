import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StartGame } from "./src/screens";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Iniciando o projeto</Text>
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24f",
    alignItems: "center",
    justifyContent: "center",
  },
});
