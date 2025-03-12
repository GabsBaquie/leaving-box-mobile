import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link, LinkProps } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

interface NavigationButtonProps {
  href: LinkProps['href'];
  label: string;
  color?: "blue" | "red"; // Couleur du bouton
  textColor?: "black" | "white"; // Couleur du texte
  gradientDirection?: "top-to-bottom" | "bottom-to-top"; // Orientation du gradient
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ 
  href, 
  label, 
  color = "blue", 
  textColor = "white", 
  gradientDirection = "top-to-bottom" // Valeur par défaut
}) => {
  // Définition des couleurs du gradient en fonction de la couleur choisie
  const gradientColors =
    color === "blue"
      ? ["#66a6ff", "#89f7fe"] // Dégradé bleu
      : color === "red"
      ? ["#660708", "#AD1D2B", "#DE070B"] // Dégradé rouge foncé -> clair
      : ["#ff512f", "#000000"]; // Dégradé par défaut (orange -> noir)

  // Définition du sens du gradient
  const gradientStart = gradientDirection === "start" ? { x: 0, y: 0 } : { x: 0, y: 1 };
  const gradientEnd = gradientDirection === "end" ? { x: 0, y: 1 } : { x: 0, y: 0 };

  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.buttonContainer}>
        <LinearGradient
          colors={gradientColors}
          start={gradientStart}
          end={gradientEnd}
          style={styles.gradientButton}
        >
          <Text style={[styles.buttonText, { color: textColor }]}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    overflow: "hidden",
    elevation: 5,
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NavigationButton;