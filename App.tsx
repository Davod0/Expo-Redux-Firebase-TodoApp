import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./HomeScreen";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <HomeScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}