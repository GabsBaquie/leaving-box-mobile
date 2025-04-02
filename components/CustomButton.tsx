import { LinearGradient } from "expo-linear-gradient";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

export default function CustomButton({
  buttonText,
  linearGradientColors,
  onPress,
  containerStyle,
}: Readonly<{
  buttonText: string;
  linearGradientColors?: [string, string, ...string[]];
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}>) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, containerStyle]}
      onPress={onPress}
    >
      {linearGradientColors && (
        <LinearGradient colors={linearGradientColors} style={styles.gradient} />
      )}
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
  },
  gradient: {
    position: "absolute",
    flex: 1,
    width: "32.3%",
    height: "100%",
    borderRadius: 5,
  },
});
