import { Image, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export default function HomeRole({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) {
  var icon1 =
    type == "Agent"
      ? require("@/assets/images/maleAgent.png")
      : require("@/assets/images/maleScientist.png");
  var icon2 =
    type == "Agent"
      ? require("@/assets/images/femaleAgent.png")
      : require("@/assets/images/femaleScientist.png");
  return (
    <ThemedView
      style={[
        styles.container,
        { backgroundColor: type == "Agent" ? "red" : "blue" },
      ]}
    >
      {type == "Operator" && (
        <ThemedText style={styles.textStyle}>Operator</ThemedText>
      )}

      <Image source={icon1} style={styles.image1Style} resizeMode="contain" />
      <Image source={icon2} style={styles.image2Style} resizeMode="contain" />

      {type == "Agent" && (
        <ThemedText style={styles.textStyle}>Agent</ThemedText>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image1Style: {
    height: 200,
    maxWidth: "100%",
    bottom: 0,
    left: 30,
    position: "absolute",
  },
  image2Style: {
    height: 200,
    maxWidth: "100%",
    bottom: 0,
    left: -50,
    position: "absolute",
  },
  textStyle: {
    fontSize: 20,
    backgroundColor: "white",
    color: "black",
    // flex:1,
  },
});
