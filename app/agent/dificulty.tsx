import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function DificultyScreen() {
  return (
    <ParallaxScrollView style={styles.container}>
      <Image
        style={{ width: 100, height: 100, margin: "auto", marginTop: 50 }}
        source={require("@/assets/images/bomb-logo.png")}
      />
      <Image 
        style={{margin: "auto"}}
       source={require("@/assets/images/leavingbox.png")}
       />

      <View style={styles.linkContainer}>
        <Link href={"/"} style={[styles.navStyle, { backgroundColor: "green" }]}>
          Easy
        </Link>

        <Link href={"/"} style={[styles.navStyle, { backgroundColor: "orange" }]}>
          Medium
        </Link>

        <Link href={"/"} style={[styles.navStyle, { backgroundColor: "red" }]}>

          Hard
        </Link>
      </View>

      <Link href={"/"} style={styles.navStyle}>
          Back
        </Link>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },

  linkContainer: {
    padding: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  navStyle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
