import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { LinearGradient } from "expo-linear-gradient";
import NavigationButton from "@/components/NavigationButton";
import { Socket } from "@/core/api/session.api";
import { useRouter } from "expo-router";

export default function JoinGame() {
  const router = useRouter();
  const [code, setCode] = useState(""); // État pour stocker le code saisi

  const joinGame = () => {
    Socket.emit("joinSession", { sessionCode: code, operatorId: "operator1" });
    Socket.on("playerJoined", () => {
      console.log("playerJoined");
      router.navigate({
        pathname: "/agent/game",
        params: { sessionCode: code },
      });
    });

    setTimeout(() => {
      Socket.emit("getSession", { sessionCode: code });
      Socket.on("currentSession", (data) => {
        console.log("currentSession", data);
      });
    }, 1000);
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (code.length > 0) {
      joinGame();
    }
  };
  return (
    <ParallaxScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Why do we use it?</Text>

        <LinearGradient
          colors={["#66a6ff", "#89f7fe"]} // Dégradé bleu
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter code"
            placeholderTextColor="#000000"
            value={code}
            onChangeText={setCode}
          />
        </LinearGradient>

        <Text style={styles.description}>
          Proident est dolore ullamco cupidatat non ullamco anim. Laborum ea
          aliquip magna deserunt qui. Elit mollit elit deserunt velit labore
          proident adipisicing nisi esse sunt laboris. Magna eu dolore ad. Aute
          Lorem aute tempor dolore nisi aliqua reprehenderit commodo ut laborum
          nostrud laboris pariatur. Duis amet in minim sunt amet adipisicing
          velit consectetur amet pariatur sunt ut.
        </Text>
        <View style={styles.navigationContainer}>
          <NavigationButton
            label="Retour"
            onPress={handleBack}
            color="blue"
            textColor="black"
          />
          {code.length > 0 && (
            <NavigationButton
              label="Rejoindre la partie"
              color="blue"
              onPress={handleNext}
            />
          )}
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    marginVertical: 50,
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
    marginBottom: 50,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: "80%",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
    marginVertical: 20,
  },
  input: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    borderRadius: 10,
  },
  navigationContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
});
