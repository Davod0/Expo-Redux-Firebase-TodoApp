import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import HomeScreen from "./HomeScreen";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <HomeScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
