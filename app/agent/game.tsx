import { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import NavigationButton from "@/components/NavigationButton";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Socket } from "@/core/api/session.api";

export default function WaitingRoom() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { sessionCode, maxTime, role } = useLocalSearchParams();
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const interval = setInterval(() => {
      Socket.emit("getSession", { sessionCode: sessionCode });
    }, 1000);

    const handleCurrentSession = (data: any) => {
      setSession(data);
      setIsLoading(false);
    };

    Socket.on("currentSession", handleCurrentSession);

    return () => {
      clearInterval(interval);
      Socket.off("currentSession", handleCurrentSession);
    };
  }, [sessionCode]);

  useEffect(() => {
    const handleSessionCleared = (res: any) => {
      Alert.alert(
        "Fermeture de la session",
        "L'agent hôte de la session a quitté la salle d'attente. La session va être fermée."
      );
      handleBack();
    };

    Socket.on("sessionCleared", handleSessionCleared);

    return () => {
      Socket.off("sessionCleared", handleSessionCleared);
    };
  }, []);

  const handleBack = () => {
    if (role === "operator") {
      Socket.disconnect();
    }
    router.back();
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Salle d'attente</Text>
      <TouchableOpacity style={styles.codeButton}>
        <Text style={styles.codeText}>{sessionCode}</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#ffffff"
          style={{ marginBottom: 20 }}
        />
      ) : (
        session?.connectedClients.map((client: any) => (
          <Text key={client.id} style={styles.message}>
            {client.id}
          </Text>
        ))
      )}
      <NavigationButton
        onPress={handleBack}
        param={{ sessionCode: sessionCode }}
        label="Quitter la salle d'attente"
        color="red"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  codeButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 20,
    elevation: 5,
    position: "absolute",
    top: 20,
    right: 20,
  },
  codeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
});
