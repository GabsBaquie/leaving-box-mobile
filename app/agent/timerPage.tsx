import { ThemedView } from "@/components/ThemedView";
import { Socket } from "@/core/api/session.api";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

export default function TimerPage() {
  const router = useRouter();
  const { sessionCode, maxTime, role } = useLocalSearchParams();
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  useEffect(() => {
    handleTime(maxTime as any);
    setTimeout(() => {
      handleTimer();
    }, 1000);
  }, []);

  function formatTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  const handleTime = (time: number) => {
    const formatted = formatTime(time);
    // Supposons que vous ayez deux états pour minutes et seconds
    const [minutes, seconds] = formatted.split(":");
    setMinutes(minutes);
    setSeconds(seconds);
  };

  const handleTimer = () => {
    console.log("Starting timer");
    Socket.emit("startTimer", { sessionCode: sessionCode, duration: maxTime });
    Socket.on("timerUpdate", (data: any) => {
      handleTime(data.remaining);
      console.info("Timer update", data);
    });
    Socket.on("gameOver", (data: any) => {
      Alert.alert("Fin de la partie", data.message);
    });
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <View style={styles.codeContainer}>
        <TextInput
          style={styles.codeInput}
          value={minutes.toString().charAt(0)}
          maxLength={1}
          editable={false}
        />
        <TextInput
          style={styles.codeInput}
          value={minutes.toString().charAt(1)}
          maxLength={1}
          editable={false}
        />
        <Text style={styles.separator}>:</Text>
        <TextInput
          style={styles.codeInput}
          value={seconds.toString().charAt(0)}
          maxLength={1}
          editable={false}
        />
        <TextInput
          style={styles.codeInput}
          value={seconds.toString().charAt(1)}
          maxLength={1}
          editable={false}
        />
      </View>
      <Text style={styles.text}>This is the timer page</Text>
    </ThemedView>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },

  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  codeInput: {
    width: 40,
    height: 40,
    backgroundColor: "#eee",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  separator: {
    fontSize: 20,
    color: "white",
  },
});
