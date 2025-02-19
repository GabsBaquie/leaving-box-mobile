import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function DificultyScreen() {
  return (
    <ThemedView>
      <Image
        style={styles.pageLogo}
        source={require("@/assets/images/icon.png")}
      />
      <Link href={"/"} style={styles.navStyle}>
        Back
      </Link>
    </ThemedView>
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
