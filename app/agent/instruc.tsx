import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import NavigationButton from "@/components/NavigationButton";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Socket } from "@/core/api/session.api";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Session } from "@/core/interface/sesssion.interface";
import { saveSession } from "@/core/service/session.service";

export default function InstrucScreen() {
  const { difficulty, sessionCode } = useLocalSearchParams();
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    Socket.emit("createSession", { agentId: "1", difficulty: difficulty });

        Socket.on("sessionCreated", (session: Session) => {
          console.log("sessionCreated", session);
          setSession(session);
          saveSession(session);
        });
  }, []);

  const handleTime = () => {
    if (!session) {
      return "0:00";
    }
    const minutes = Math.floor(session.maxTime / 60000);
    const seconds = ((session.maxTime % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? "0" : "") + seconds;
  };

  return (
    <ParallaxScrollView>
      <View style={styles.container}>
        {/* Bouton Code */}
        <TouchableOpacity style={styles.codeButton}>
          <Text style={styles.codeText}>{session?.code}</Text>
        </TouchableOpacity>

        {/* Texte explicatif */}
        <Text style={styles.title}>Why do we use it?</Text>
        <Text style={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters...
        </Text>

        {/* Section Code à 4 chiffres */}
        <View style={styles.codeContainer}>
          <Text style={styles.codeInput}>{handleTime()}</Text>
        </View>

        <View style={styles.navigationContainer}>
          <NavigationButton
            href="/agent/dificulty"
            param={{
              code: session?.code,
              sessionId: session?.id,
              maxTime: session?.maxTime,
            }}
            label="Retour"
          />
          <NavigationButton href="/agent/game" label="Rejoindre la partie" />
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  codeButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 20,
    elevation: 5, // Effet d'ombre
  },
  codeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 15,
  },

  codeContainer: {
    minWidth: 200,
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 5,
    backgroundColor: "#eee",
  },
  codeInput: {
    fontSize: 23,
    marginHorizontal: 5,
  },
  separator: {
    fontSize: 20,
    color: "white",
  },

  navigationContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
});
