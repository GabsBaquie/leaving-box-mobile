import {
  Image,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { ThemedView } from "../ThemedView";
import { router } from "expo-router";

type HomeAgentProps = {
  navLink?: string;
  onPress?: () => void;
};

export default function HomeAgent({ navLink, onPress }: HomeAgentProps) {
  function handleComponentClick() {
    if (onPress) {
      onPress();
    } else if (navLink) {
      router.navigate(navLink);
    }
  }

  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={handleComponentClick} style={styles.link}>
        <Image
          source={require("@/assets/images/femaleAgent.png")}
          style={styles.image1Style}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/maleAgent.png")}
          style={styles.image2Style}
          resizeMode="contain"
        />
        <Text style={styles.textStyle}>Agent</Text>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link: {
    flex: 1,
    zIndex: 1,
    flexDirection: "column",
  },
  image1Style: {
    height: 300,
    maxWidth: "100%",
    left: 60,
    bottom: 0,
    position: "absolute",
  },
  image2Style: {
    height: 300,
    maxWidth: "100%",
    left: -60,
    bottom: 0,
    position: "absolute",
  },
  textStyle: {
    fontFamily: "TrainOne",
    position: "absolute",
    bottom: -10,
    left: 30,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
