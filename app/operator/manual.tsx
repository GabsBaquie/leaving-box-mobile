import ManualsNav from "@/components/manual/ManualsNav";
import ModuleInstructions from "@/components/manual/ModuleInstructions";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Socket } from "@/core/api/session.api";
import { ModuleManual } from "@/core/interface/module.interface";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Manual() {
  const router = useRouter();
  const { sessionCode, maxTime, role, moduleManuals } = useLocalSearchParams();
  const [selectedManual, setSelectedManual] = useState<ModuleManual | null>(
    null
  );
  const Manuals: ModuleManual[] = JSON.parse(moduleManuals as string);

  useEffect(() => {
    const handleSessionCleared = (res: any) => {
      Alert.alert(
        "Fermeture de la session",
        "L'agent hôte de la session a quitté la salle d'attente. La session va être fermée."
      );
      handleDisconnected();
    };

    Socket.on("sessionCleared", handleSessionCleared);

    return () => {
      Socket.off("sessionCleared", handleSessionCleared);
    };
  }, []);

  const handleDisconnected = () => {
    Socket.disconnect();
    router.navigate({
      pathname: "/operator/joinGame",
    });
  };

  return (
    <ParallaxScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.navContainer}>
          {Manuals.map((manual, index) => (
            <ManualsNav
              key={index}
              index={index}
              manual={manual}
              selectedManual={selectedManual}
              setSelectedManual={(manual: ModuleManual) => {
                setSelectedManual(manual);
                console.log("Selected manual:", manual.name);
              }}
            />
          ))}
        </View>

        <ImageBackground
          source={require("../../assets/images/folder_background.png")}
          style={styles.folderBackground}
          resizeMode="repeat"
        >
          <Image
            source={require("../../assets/images/paperclip.png")}
            style={styles.paperclip}
          />

          <View style={styles.contentContainer}>
            {selectedManual ? (
              <ModuleInstructions manual={selectedManual} />
            ) : (
              <Text style={styles.title}>
                Bomb Defusal Manual, for an Operator
              </Text>
            )}
          </View>
        </ImageBackground>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flex: 1,
    marginVertical: 60,
  },
  navContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginVertical: 100,
  },
  folderBackground: {
    width: width * 0.91,
    minHeight: 700,
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
  },
  paperclip: {
    position: "absolute",
    zIndex: 1,
    top: -20,
    right: 10,
    width: 100,
    height: 100,
    transform: [{ rotate: "12deg" }],
    resizeMode: "contain",
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 15,
  },
});
