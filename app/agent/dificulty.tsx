import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link, useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import * as Session from "@/core/api/session.api";

const defaultWidth = Dimensions.get("window").width * 0.3;
const expandedWidth = Dimensions.get("window").width * 0.9;

export default function DifficultyScreen() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const router = useRouter();

  // Create separate shared values for each difficulty
  const widthEasy = useSharedValue(defaultWidth);
  const widthMedium = useSharedValue(defaultWidth);
  const widthHard = useSharedValue(defaultWidth);

  // Timing configuration for all animations
  const timingConfig = {
    duration: 300,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const animatedStyleEasy = useAnimatedStyle(() => {
    return { width: widthEasy.value };
  });
  const animatedStyleMedium = useAnimatedStyle(() => {
    return { width: widthMedium.value };
  });
  const animatedStyleHard = useAnimatedStyle(() => {
    return { width: widthHard.value };
  });

  // Difficulty text details
  const difficultyDetails: Record<string, string> = {
    Easy: "Un mode relaxant, parfait pour les débutants.",
    Medium: "Un bon challenge avec quelques difficultés.",
    Hard: "Un mode extrême, réservé aux experts !",
  };

  const handleDifficultySelect = (difficulty: string) => {
    if (selectedDifficulty === difficulty) {
      // Deselect: animate the corresponding button back to default
      if (difficulty === "Easy") {
        widthEasy.value = withTiming(defaultWidth, timingConfig);
      } else if (difficulty === "Medium") {
        widthMedium.value = withTiming(defaultWidth, timingConfig);
      } else if (difficulty === "Hard") {
        widthHard.value = withTiming(defaultWidth, timingConfig);
      }
      setSelectedDifficulty("");
    } else {
      // New selection: animate the selected button to expanded width and reset others
      if (difficulty === "Easy") {
        widthEasy.value = withTiming(expandedWidth, timingConfig);
      } else if (difficulty === "Medium") {
        widthMedium.value = withTiming(expandedWidth, timingConfig);
      } else if (difficulty === "Hard") {
        widthHard.value = withTiming(expandedWidth, timingConfig);
      }
      setSelectedDifficulty(difficulty);
    }
  };

  // Helper to render a button for a difficulty level
  const renderDifficultyButton = (
    difficulty: string,
    baseStyle: object,
    animatedStyle: any
  ) => {
    const positionStyle = {
      position: selectedDifficulty === difficulty ? "absolute" : "relative",
      zIndex: selectedDifficulty === difficulty ? 1 : 0,
    };
    return (
      <Animated.View
        style={[
          styles.difficultyButton,
          baseStyle,
          animatedStyle,
          positionStyle,
        ]}
      >
        <TouchableOpacity
          onPress={() => handleDifficultySelect(difficulty)}
          style={styles.buttonContent}
        >
          <Text style={styles.difficultyText}>{difficulty}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <ParallaxScrollView>
      <View>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/bomb-logo.png")}
            style={[styles.image, { width: 100, height: 100 }]}
          />
          <Image
            source={require("@/assets/images/leavingbox.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.difficultyContainer}>
          {renderDifficultyButton("Easy", styles.easyButton, animatedStyleEasy)}
          {renderDifficultyButton(
            "Medium",
            styles.mediumButton,
            animatedStyleMedium
          )}
          {renderDifficultyButton("Hard", styles.hardButton, animatedStyleHard)}
        </View>

        {selectedDifficulty ? (
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              {difficultyDetails[selectedDifficulty]}
            </Text>
          </View>
        ) : null}

        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => router.back()}
          >
            <Text style={styles.navigationText}>Retour</Text>
          </TouchableOpacity>

          {selectedDifficulty && (
            <Link
              href={"/"}
              asChild
              onPress={() => {
                Session.createSession("1");
              }}
            >
              <TouchableOpacity style={styles.navigationButton}>
                <Text style={styles.navigationText}>Suivant</Text>
              </TouchableOpacity>
            </Link>
          )}
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 100,
    alignItems: "center",
    marginBottom: 50,
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 60,
    resizeMode: "contain",
  },
  difficultyContainer: {
    flexDirection: "row",
    height: 80,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  difficultyButton: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ skewX: "-10deg" }],
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    marginHorizontal: 5,
  },
  buttonContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  easyButton: {
    backgroundColor: "#4CAF50",
  },
  mediumButton: {
    backgroundColor: "#FF9800",
  },
  hardButton: {
    backgroundColor: "#F44336",
  },
  difficultyText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    transform: [{ skewX: "10deg" }],
  },
  detailsContainer: {
    marginTop: 30,
    padding: 20,
    alignItems: "center",
  },
  detailsText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  navigationContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
  navigationButton: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 4,
    width: 130,
  },
  navigationText: {
    color: "#1E1E1E",
    fontWeight: "bold",
    textAlign: "center",
  },
});
