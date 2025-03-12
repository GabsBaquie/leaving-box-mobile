import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link, useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { useState, useRef } from "react";
import NavigationButton from "@/components/NavigationButton";
import { Socket } from "@/core/api/session.api";

export default function DifficultyScreen() {
  const router = useRouter();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const windowWidth = Dimensions.get("window").width;
  const animatedWidth = useRef(new Animated.Value(windowWidth * 0.3)).current;
  const animatedPosition = useRef(new Animated.Value(0)).current;

  const difficultyDetails: Record<string, string> = {
    Easy: "Un mode relaxant, parfait pour les débutants.",
    Medium: "Un bon challenge avec quelques difficultés.",
    Hard: "Un mode extrême, réservé aux experts !",
  };

  const handleDifficultySelect = (difficulty: string) => {
    if (selectedDifficulty === difficulty) {
      // Si on clique sur le même bouton, on réinitialise
      Animated.parallel([
        Animated.timing(animatedWidth, {
          toValue: windowWidth * 0.3,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(animatedPosition, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
      setSelectedDifficulty("");
    } else {
      // Sinon, on sélectionne le nouveau bouton
      setSelectedDifficulty(difficulty);
      Animated.parallel([
        Animated.timing(animatedWidth, {
          toValue: windowWidth * 0.9,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(animatedPosition, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  const handleBack = () => {
    router.navigate("/");
  };

  const handleNext = () => {
    if (selectedDifficulty) {
      Socket.connect();
      router.navigate({
        pathname: "/agent/joinGame",
        params: { difficulty: selectedDifficulty },
      });
    }
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
          <Animated.View
            style={[
              styles.difficultyButton,
              styles.easyButton,
              selectedDifficulty === "Easy" && { width: animatedWidth },
              {
                display:
                  selectedDifficulty && selectedDifficulty !== "Easy"
                    ? "none"
                    : "flex",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => handleDifficultySelect("Easy")}
              style={styles.buttonContent}
            >
              <Text style={styles.difficultyText}>Facile</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[
              styles.difficultyButton,
              styles.mediumButton,
              selectedDifficulty === "Medium" && { width: animatedWidth },
              {
                display:
                  selectedDifficulty && selectedDifficulty !== "Medium"
                    ? "none"
                    : "flex",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => handleDifficultySelect("Medium")}
              style={styles.buttonContent}
            >
              <Text style={styles.difficultyText}>Médium</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[
              styles.difficultyButton,
              styles.hardButton,
              selectedDifficulty === "Hard" && { width: animatedWidth },
              {
                display:
                  selectedDifficulty && selectedDifficulty !== "Hard"
                    ? "none"
                    : "flex",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => handleDifficultySelect("Hard")}
              style={styles.buttonContent}
            >
              <Text style={styles.difficultyText}>Hard</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {selectedDifficulty && (
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              {difficultyDetails[selectedDifficulty]}
            </Text>
          </View>
        )}

        <View style={styles.navigationContainer}>
          <NavigationButton onPress={handleBack} label="Retour" color="red" />
          {selectedDifficulty && (
            <NavigationButton
              href="/agent/joinGame"
              label="Suivant"
              color="red"
              onPress={handleNext}
            />
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
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ skewX: "-10deg" }],
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
  },

  buttonContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  easyButton: {
    backgroundColor: "#4CAF50",
    zIndex: 2,
  },

  mediumButton: {
    backgroundColor: "#FF9800",
    zIndex: 3,
    marginHorizontal: -10,
  },

  hardButton: {
    backgroundColor: "#F44336",
    zIndex: 1,
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

  detailsTitle: {
    color: "tomato",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
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
