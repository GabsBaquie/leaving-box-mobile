import BackButton from "@/components/BackButton";
import CustomButton from "@/components/CustomButton";
import { joinSession } from "@/core/api/session.api";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function JoinGame() {
  const [code, setCode] = useState("");
  const joinGame = () => {
    console.log("Joining game with code:", code);
    joinSession({ sessionCode: code, operatorId: "operator2" }).then((res) =>
      console.log(res)
    );
  };

  return (
    <View style={styles.mainContainer}>
      <BackButton />
      <Text style={styles.title}>Why do we use it?</Text>
      <Text style={styles.text}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Text>

      <View style={styles.codeInputContainer}>
        <LinearGradient
          colors={["#92D7DD", "#005893"]}
          style={styles.codeInputGradiant}
        />
        <TextInput
          placeholder="Input Code"
          style={styles.codeInput}
          value={code}
          onChange={(e) => setCode(e.nativeEvent.text)}
        />
      </View>

      <CustomButton
        buttonText="Join Game"
        linearGradientColors={["#92D7DD", "#005893"]}
        containerStyle={{}}
        onPress={joinGame}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#2B3135",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontFamily: "SpaceMono",
    fontSize: 20,
    fontWeight: "semibold",
  },
  text: {
    color: "white",
    marginVertical: 20,
    fontSize: 17,
  },
  codeInputContainer: {
    width: "100%",
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
  },
  codeInput: {
    width: "100%",
    color: "white",
    paddingLeft: 10,
  },
  codeInputGradiant: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
});
