import React, { useState } from 'react';
import { View, Text, StyleSheet, Clipboard, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CodeGame = () => {
  const [copied, setCopied] = useState(false);
  const code = "1234-5678"; // Code affiché

  const copyToClipboard = () => {
    Clipboard.setString(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Réinitialise après 2s
  };

  return (
    <LinearGradient
      colors={["#660708", "#AD1D2B", "#DE070B"]} // Dégradé rouge
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBackground}
    >
      <TouchableOpacity onPress={copyToClipboard} activeOpacity={0.8}>
        <LinearGradient
          colors={["#ffffff", "#cccccc"]} // Dégradé clair pour le texte
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.textContainer}
        >
          <Text style={styles.codeText}>{code}</Text>
        </LinearGradient>
      </TouchableOpacity>

      {copied && <Text style={styles.copiedText}>Code copié !</Text>}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    width: 170,
    height: 80, 
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  codeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Texte foncé pour contraste
    textAlign: "center",
  },
  copiedText: {
    fontSize: 12,
    color: "#ffffff",
  },
});

export default CodeGame;