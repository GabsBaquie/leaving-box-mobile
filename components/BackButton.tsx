import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => {
        router.back();
      }}
    >
      <Image
        source={require("@/assets/images/back-button.png")}
        style={styles.backButtonImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 100,
  },
  backButtonImage: {
    height: 50,
    width: 50,
  },
});
