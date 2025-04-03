import { Socket } from "@/core/api/session.api";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function Manual() {
  const router = useRouter();
  const { sessionCode, maxTime, role, moduleManuals } = useLocalSearchParams();
  useEffect(() => {
    console.log("Manual screen loaded");
    console.log("Session Code:", sessionCode);
    console.log(moduleManuals);
  }, []);

  useEffect(() => {
    const handleSessionCleared = (res: any) => {
      Alert.alert(
        "Fermeture de la session",
        "L'agent hôte de la session a quitté la salle d'attente. La session va être fermée."
      );
      handleDisconnected();
    };

    Socket.on("sessionCleared", handleSessionCleared);

    return () => {
      Socket.off("sessionCleared", handleSessionCleared);
    };
  }, []);

  const handleDisconnected = () => {
    Socket.disconnect();
    router.navigate({
      pathname: "/operator/joinGame",
    });
  };

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
