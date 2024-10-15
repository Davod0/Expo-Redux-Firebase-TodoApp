import { StyleSheet, View, Text } from "react-native";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function HomeScreen() {
  return (
    <View>
      <Text style={s.headerText}>All todos</Text>
      <TodoForm />
      <TodoList />
    </View>
  );
}

const s = StyleSheet.create({
  headerText: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 40,
    paddingRight: 10,
  },
});
