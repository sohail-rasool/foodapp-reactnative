import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "./global.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "QuickSand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "QuickSand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "QuickSand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
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
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }} />
      <Toast />
    </Provider>
  );
}
