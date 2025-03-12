import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import NavigationButton from '@/components/NavigationButton';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link } from "expo-router";

export default function InstrucScreen() {
    return (
        <ParallaxScrollView>
            <View style={styles.container}>
                {/* Bouton Code */}
                <TouchableOpacity style={styles.codeButton}>
                    <Text style={styles.codeText}>CODE</Text>
                </TouchableOpacity>

                {/* Texte explicatif */}
                <Text style={styles.title}>Why do we use it?</Text>
                <Text style={styles.description}>
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters...
                </Text>

                {/* Section Code à 4 chiffres */}
                <View style={styles.codeContainer}>
                    <TextInput style={styles.codeInput} value="1" maxLength={1} />
                    <TextInput style={styles.codeInput} value="0" maxLength={1} />
                    <Text style={styles.separator}>:</Text>
                    <TextInput style={styles.codeInput} value="0" maxLength={1} />
                    <TextInput style={styles.codeInput} value="0" maxLength={1} />
                </View>

                <View style={styles.navigationContainer}>
                    <NavigationButton href="/agent/game" color="red" label="Rejoindre la partie" />

                    <NavigationButton href="/agent/game" color="red" label="Retour" />
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

    navigationContainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        padding: 20,
    },
});