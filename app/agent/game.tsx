import { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import NavigationButton from "@/components/NavigationButton";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { Session } from "@/core/interface/sesssion.interface";

export default function WaitingRoom() {
  const [isLoading, setIsLoading] = useState(true);
  const { sessionCode } = useLocalSearchParams();
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {}, [5]);

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
        <Text style={styles.message}>Tous les joueurs sont prêts !</Text>
      )}
      <NavigationButton
        href="/agent/instruc"
        param={{ sessionCode: sessionCode }}
        label="Quitter la salle d'attente" color="red"
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
