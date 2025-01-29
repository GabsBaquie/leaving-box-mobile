import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function DificultyScreen() {
  return (
    <ParallaxScrollView>
      <Image
        style={styles.pageLogo}
        source={require("@/assets/images/homePageLogo.png")}
      />
      <Link href={"/"} style={styles.navStyle}>
        Back
      </Link>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  pageLogo: {
    width: 100,
    height: 100,

  },
  navStyle: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});
