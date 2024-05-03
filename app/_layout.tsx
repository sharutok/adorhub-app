import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";
import ActionableTicketList from '../app/ticket-system/actionable-ticket-list'; 
const queryClient = new QueryClient({});

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
  // initialRouteName: "login",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    BrandonGrotesqueLight: require("../assets/fonts/BrandonGrotesque-Light.ttf"),
    BrandonGrotesqueRegular: require("../assets/fonts/BrandonGrotesque-Regular.ttf"),
    SourceSansProExtraLight: require("../assets/fonts/SourceSansPro-ExtraLight.ttf"),
    SourceSansProRegular: require("../assets/fonts/SourceSansPro-Regular.ttf"),
    ArchiveRegular: require("../assets/fonts/Archive-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        {/* <Stack.Screen name="ticket-system/actionable-ticket-list" options={{headerShown:false}}/> */}
        {/* <Stack.Screen name="ticket-system/create-ticket" options={{headerShown:false}}/> */}
      </Stack>
    </ThemeProvider>
    </QueryClientProvider>
  );
}
