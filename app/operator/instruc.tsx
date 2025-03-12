import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { LinearGradient } from "expo-linear-gradient";
import NavigationButton from '@/components/NavigationButton';


export default function InstrucScreen() {
    return (
        <ParallaxScrollView>
            <View style={styles.container}>
                {/* Texte explicatif */}
                <Text style={styles.title}>Why do we use it?</Text>

                {/* Bouton "Input Code" avec dégradé bleu */}
                <TouchableOpacity style={styles.buttonContainer}>
                    <LinearGradient
                        colors={["#66a6ff", "#89f7fe"]} // Dégradé bleu
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Input code</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <Text style={styles.description}>
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters...
                </Text>

                {/* Bouton "Rejoindre la partie" */}
            <NavigationButton href="/agent/game" label="Rejoindre la partie" color="blue" />

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
    buttonContainer: {
        width: "80%",
        marginVertical: 10,
    },
});