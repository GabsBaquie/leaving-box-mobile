import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function TimerScreen() {
    const [time, setTime] = useState("10:00"); // Temps initial

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{time}</Text>
            <Button title="Démarrer le Timer" onPress={() => console.log("Timer démarré")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    timer: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
    },
});