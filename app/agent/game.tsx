import { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import NavigationButton from "@/components/NavigationButton";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useRole } from "@/components/RoleContext";

export default function WaitingRoom() {
  const [isLoading, setIsLoading] = useState(true);
  const { role } = useRole();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Salle d'attente</ThemedText>
      {isLoading ? (
        <ActivityIndicator size="large" color="#ffffff" style={{ marginBottom: 20 }} />
      ) : (
        <View style={{ alignItems: "center", marginBottom: 50 }}>
          <ThemedText style={styles.message}>Tous les joueurs sont prêts !</ThemedText>
          {role === "agent" && (
            <NavigationButton 
              href="/agent/timer" 
              label="Go" 
              color="red" 
            />
          )}
        </View>
      )}
      <NavigationButton href="/" label="Quitter la salle d'attente" color="red" />
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