import { Button, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { toggleCompleteTodo } from "./store/todosSlice";

export default function HomeScreen() {
  const todos = useAppSelector((state) => state.todos);
  const disptach = useAppDispatch();

  const handleToggleCompleteTodo = (id: number) => {
    disptach(toggleCompleteTodo(id));
  };

  return (
    <View style={s.root}>
      <Text style={s.headerText}>All todos</Text>
      {todos.map((todo) => (
        <View style={s.item} key={todo.id}>
          <Text style={{ flex: 1 }}>{todo.text}</Text>
          <Button
            title={todo.completed ? "Undo" : "Done"}
            onPress={() => handleToggleCompleteTodo(todo.id)}
          />
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
