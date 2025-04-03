import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Manual() {
  const router = useRouter();
  const { sessionCode, maxTime, role, moduleManuals } = useLocalSearchParams();
  useEffect(() => {
    console.log("Manual screen loaded");
    console.log("Session Code:", sessionCode);
    console.log("Module Manuals : ", moduleManuals);
  }, []);

  return (
    <View>
      <Text style={styles.title}>Manual</Text>
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
});
