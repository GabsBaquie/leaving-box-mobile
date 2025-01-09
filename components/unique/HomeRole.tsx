import { Image, Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeRole({
  children,
  type,
  navLink,
}: {
  children: React.ReactNode;
  type: string;
  navLink: any;
}) {
  var icon1 =
    type == "agent"
      ? require("@/assets/images/femaleAgent.png")
      : require("@/assets/images/maleScientist.png");
  var icon2 =
    type == "agent"
      ? require("@/assets/images/maleAgent.png")
      : require("@/assets/images/femaleScientist.png");

  function handleComponentClick() {
    router.navigate(navLink);
  }

  return (
    <ThemedView
      style={[
        styles.container,
        // { backgroundColor: type == "agent" ? "red" : "blue" },
      ]}
    >
      <LinearGradient
        style={styles.background}
        colors={type == "agent" ? gradients.agent : gradients.operator}
      />
      <Pressable onPress={handleComponentClick} style={styles.link}>
        {type == "operator" && (
          <ThemedText style={styles.textStyle}>Operator</ThemedText>
        )}

        <Image source={icon1} style={styles.image1Style} resizeMode="contain" />
        <Image source={icon2} style={styles.image2Style} resizeMode="contain" />

        {type == "agent" && (
          <ThemedText style={styles.textStyle}>Agent</ThemedText>
        )}
      </Pressable>
    </ThemedView>
  );
}

const gradients = {
  agent: ["#660708", "#AD1D2B", "#DE070B"],
  operator: ["#92D7DD", "#46B2C5", "#005893"],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // transform: [{ rotate: "45deg" }],
  },
  link: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  image1Style: {
    height: 200,
    maxWidth: "100%",
    bottom: 0,
    left: 40,
    position: "absolute",
  },
  image2Style: {
    height: 200,
    maxWidth: "100%",
    bottom: 0,
    left: -40,
    position: "absolute",
  },
  textStyle: {
    fontSize: 20,
    // backgroundColor: "white",
    color: "black",
    // flex:1,
  },
});
