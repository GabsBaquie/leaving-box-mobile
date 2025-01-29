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
        <Link href={"/"} style={[styles.Btn, styles.BtnDifficulty, { backgroundColor: "green" }]}>
          Easy
        </Link>

        <Link href={"/"} style={[styles.Btn, styles.BtnDifficulty, { backgroundColor: "orange" }]}>
          Medium
        </Link>

        <Link href={"/"} style={[styles.Btn, styles.BtnDifficulty, { backgroundColor: "red" }]}>

          Hard
        </Link>
      </View>

      <View style={styles.linkContainer}>
      <Link href={"/"} style={[styles.Btn, { padding: 10, backgroundColor: "gainsboro" }]}>
          Home
        </Link>
        <Link href={"/"} style={[styles.Btn, { padding: 10, backgroundColor: "gainsboro" }]}>
          Next
        </Link>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "red",
  },

  linkContainer: {
    paddingTop: 24,
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  Btn: {
    fontSize: 20,
    fontWeight: "bold",
  },

  BtnDifficulty: {
    padding: 32,
  }
});
