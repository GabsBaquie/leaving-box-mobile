import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

interface NavigationButtonProps {
  href: string;
  label: string;
  param?: any;
  onPress?: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  label,
  param,
  onPress,
}) => {
  return (
    <Link href={{ pathname: href, params: param }} asChild onPress={onPress}>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>{label}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  joinButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 5,
  },

  joinButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NavigationButton;
