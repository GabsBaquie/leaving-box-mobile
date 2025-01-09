import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HomeRole from "@/components/unique/HomeRole";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <Image
        resizeMode="contain"
        source={require("@/assets/images/homePageLogo.png")}
        style={styles.mainLogo}
      />

      <ThemedView style={styles.mainContainer}>
        <HomeRole type="agent" navLink="/agent/dificulty">
          Agent
        </HomeRole>
        <HomeRole type="operator" navLink="/operator">
          Operator
        </HomeRole>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainLogo: {
    zIndex: 1000,
    width: "80%",
    top: 30,
    alignSelf: "center",
    position: "absolute",
  },

  mainContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    flex: 1,
    position: "relative",
  },
});
