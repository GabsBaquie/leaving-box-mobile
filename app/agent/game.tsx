import { useState, useEffect } from "react";
import { useRole } from "@/components/RoleContext";
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
import { useLocalSearchParams, useRouter } from "expo-router";
import { Session } from "@/core/interface/sesssion.interface";
import { Socket } from "@/core/api/session.api";

export default function WaitingRoom() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { role } = useRole();
  const { sessionCode } = useLocalSearchParams();
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const interval = setInterval(() => {
      Socket.emit("getSession", { sessionCode: sessionCode });
      Socket.on("currentSession", (data) => {
        setSession(data);
        setIsLoading(false);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {}, [5]);

  const handleBack = () => {
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
