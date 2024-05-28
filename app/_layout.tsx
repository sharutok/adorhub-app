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
const queryClient = new QueryClient({});

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  // initialRouteName: '(tabs)',
  // initialRouteName: "login",
  // initialRouteName: "home",
  // initialRouteName: "/conference-booking/create-conference",
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
SourceSansProBlack:require('../assets/fonts/SourceSansPro-Black.ttf'),
SourceSansProBlackItalic:require('../assets/fonts/SourceSansPro-BlackItalic.ttf'),
SourceSansProBold:require('../assets/fonts/SourceSansPro-Bold.ttf'),
SourceSansProBoldItalic:require('../assets/fonts/SourceSansPro-BoldItalic.ttf'),
SourceSansProExtraLightItalic:require('../assets/fonts/SourceSansPro-ExtraLightItalic.ttf'),
SourceSansProItalic:require('../assets/fonts/SourceSansPro-Italic.ttf'),
SourceSansProLight:require('../assets/fonts/SourceSansPro-Light.ttf'),
SourceSansProLightItalic:require('../assets/fonts/SourceSansPro-LightItalic.ttf'),
SourceSansProSemiBold:require('../assets/fonts/SourceSansPro-SemiBold.ttf'),
SourceSansProSemiBoldItalic:require('../assets/fonts/SourceSansPro-SemiBoldItalic.ttf'),
    ...FontAwesome.font,
  });

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
    <QueryClientProvider client={queryClient}>
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal',gestureEnabled:true }} />
          
          <Stack.Screen name="ticket-system/actionable-ticket-list"
            options={{
              headerShown: true, title: 'TICKET LISTING', headerBackTitle: "Back", headerTitleAlign: 'center', headerTitleStyle: {
                fontFamily: 'SourceSansProSemiBold', fontWeight: '600', color: '#626262',
              }
            }}
          />
          <Stack.Screen name="ticket-system/create-ticket"
            options={{
            headerShown: true, title: 'RAISE TICKET', headerBackTitle: "Back", headerTitleAlign: 'center', headerTitleStyle: {
                fontFamily: 'SourceSansProSemiBold', fontWeight: '600', color: '#626262'
              }
            }}
          />
          <Stack.Screen name="conference-booking/conference-list"
            options={{
            headerShown: true, title: 'CONFERENCE LIST', headerBackTitle: "Back", headerTitleAlign: 'center', headerTitleStyle: {
                fontFamily: 'SourceSansProSemiBold', fontWeight: '600', color: '#626262'
              }
            }}
          />
          <Stack.Screen name="conference-booking/create-conference"
            options={{
            headerShown: true, title: 'CONFERENCE BOOKING', headerBackTitle: "Back", headerTitleAlign: 'center', headerTitleStyle: {
                fontFamily: 'SourceSansProSemiBold', fontWeight: '600', color: '#626262'
              }
            }}
          />
          <Stack.Screen name="conference-booking/conference-form"
            options={{
              presentation:'modal'
              // headerShown: true,
              // title: 'CONFERENCE BOOKING',
              // headerBackTitle: "Back",
              // headerTitleAlign: 'center',
              // headerTitleStyle: {
                //   fontFamily: 'SourceSansProSemiBold',
                //   fontWeight: '600',
              //   color: '#626262'
              // }
            }}
          />
          <Stack.Screen name="visitor-management/visitor-list"
              options={{
              headerShown: true, title: 'VISITOR LISTING', headerBackTitle: "Back", headerTitleAlign: 'center', headerTitleStyle: {
                  fontFamily: 'SourceSansProSemiBold', fontWeight: '600', color: '#626262'
                }
              }}
            />
      </Stack>
    </ThemeProvider>
    </QueryClientProvider>
  );
}













