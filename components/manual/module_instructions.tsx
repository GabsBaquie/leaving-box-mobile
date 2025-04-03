import { StyleSheet, Text, View } from "react-native";

export default function ModuleInstructions() {
  return (
    <View>
      <Text style={styles.title}>Module Instructions</Text>
      <Text style={styles.instructions}>
        Follow the instructions carefully to complete the module.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 20,
  },
  instructions: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    marginTop: 10,
  },
});
