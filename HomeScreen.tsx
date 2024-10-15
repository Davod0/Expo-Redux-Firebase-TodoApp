import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const todos = useSelector((state) => state.todos);

  return (
    <View style={s.root}>
      <Text style={s.headerText}>Home Screen</Text>
      {todos.map((todo) => (
        <View style={s.item} key={todo.id}>
          <Text style={{ flex: 1 }}>{todo.text}</Text>
          <Button title="Done" />
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 40,
  },
});
