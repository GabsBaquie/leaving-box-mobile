import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HomeRole from "@/components/unique/HomeRole";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      {/* <ThemedView style={styles.mainLogoContainer}> */}
      <Image
        resizeMode="contain"
        source={require("@/assets/images/homePageLogo.png")}
        style={styles.mainLogo}
      />
      {/* </ThemedView> */}

      <ThemedView style={styles.mainContainer}>
        <Link
          href={"/agent/dificulty"}
          style={{ flex: 1, flexDirection: "column" }}
        >
          <HomeRole type="Agent">Agent</HomeRole>
        </Link>
        {/* <ThemedView style={styles.separation} /> */}
        <HomeRole type="Operator">Operator</HomeRole>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainLogo: {
    zIndex: 1000,
    width: "80%",
    top: 50,
    alignSelf: "center",
    position: "absolute",
  },

  mainContainer: {
    backgroundColor: "green",
    flexDirection: "row",
    flex: 1,
    zIndex: 0,
  },

  separation: {
    width: 2,
    height: "100%",
    backgroundColor: "yellow",
  },
});
