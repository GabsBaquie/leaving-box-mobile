import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { RoleProvider } from "@/components/RoleContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
    "Rubik-Doodle": require("@/assets/fonts/RubikDoodleShadow-Regular.ttf"),
    TrainOne: require("@/assets/fonts/TrainOne-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <RoleProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="agent/dificulty" options={{ headerShown: false }} /> 
          <Stack.Screen name="agent/joinGame" options={{ headerShown: false }} />
          <Stack.Screen name="agent/game" options={{ headerShown: false }} />
          <Stack.Screen name="agent/timerPage" options={{ headerShown: false }}/>

          <Stack.Screen name="operator/joinGame" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </RoleProvider>
    </ThemeProvider>
  );
}
