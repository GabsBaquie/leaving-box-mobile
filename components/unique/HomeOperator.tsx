import { Image, Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { router } from "expo-router";

export default function HomeOperator({
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
          source={require("@/assets/images/maleScientist.png")}
          style={styles.image1Style}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/femaleScientist.png")}
          style={styles.image2Style}
          resizeMode="contain"
        />
        <ThemedText style={styles.textStyle}>Operator</ThemedText>
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
    zIndex: 10,
    flexDirection: "column-reverse",
    // backgroundColor: "red",
  },

  image1Style: {
    zIndex: 10,
    height: 300,
    maxWidth: "100%",
    left: 60,
    position: "relative",
  },
  image2Style: {
    zIndex: 10,
    height: 300,
    maxWidth: "100%",
    left: -60,
    position: "absolute",
  },
  textStyle: {
    fontFamily: "Poppins",
    position: "absolute",
    top: 100,
    right: 20,
    width: "auto",
    fontSize: 23,
    fontWeight: "700",
    color: "black",
  },
});
