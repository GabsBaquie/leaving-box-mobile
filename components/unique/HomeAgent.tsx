import { Image, Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { router } from "expo-router";

export default function HomeAgent({
  navLink,
}: Readonly<{
  navLink: any;
}>) {
  function handleComponentClick() {
    router.navigate(navLink);
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

        <ThemedText style={styles.textStyle}>Agent</ThemedText>
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
    // backgroundColor: "green",
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
    fontFamily: "Poppins",
    position: "absolute",
    bottom: -10,
    left: 30,
    width: "auto",
    fontSize: 23,
    fontWeight: "700",
    color: "white",
  },
});
