import { StatusBar, StyleSheet, Platform, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import Yammer from './screens/Dashboard/Yammer';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Yammer" component={Yammer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0
  }
})
