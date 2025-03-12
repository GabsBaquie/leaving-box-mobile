import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import NavigationButton from '@/components/NavigationButton';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import CodeGame from "@/components/CodeGame";
import { Link } from "expo-router";

export default function InstrucScreen() {
    return (
        <ParallaxScrollView>
            <View style={styles.container}>
                
                 <CodeGame />

                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.title}>Why do we use it?</Text>
                    <Text style={styles.description}>
                       Proident est dolore ullamco cupidatat non ullamco anim. Laborum ea aliquip magna deserunt qui. 
                       Elit mollit elit deserunt velit labore proident adipisicing nisi esse sunt laboris.
                       Magna eu dolore ad. Aute Lorem aute tempor dolore nisi aliqua reprehenderit commodo ut laborum nostrud laboris pariatur.
                       Duis amet in minim sunt amet adipisicing velit consectetur amet pariatur sunt ut.
                    </Text>
                </View>

                
                <View style={styles.codeContainer}>
                    <TextInput style={styles.codeInput} value="1" maxLength={1} />
                    <TextInput style={styles.codeInput} value="0" maxLength={1} />
                    <Text style={styles.separator}>:</Text>
                    <TextInput style={styles.codeInput} value="0" maxLength={1} />
                    <TextInput style={styles.codeInput} value="0" maxLength={1} />
                </View>

                <View style={styles.navigationContainer}>
                    <NavigationButton href="/agent/game" color="red" label="Rejoindre la partie" />

                    <NavigationButton href="/" color="red" label="Retour" />
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