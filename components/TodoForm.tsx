import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";

export default function TodoForm() {
  const [text, setTest] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo({ id: Date.now(), text, completed: false }));
    setTest("");
  };

  return (
    <View style={s.root}>
      <Text style={s.title}>Add a new todo</Text>
      <View style={s.row}>
        <TextInput
          style={s.input}
          value={text}
          onChangeText={setTest}
          placeholder="What needs to be done?"
        />
        <Button title="Add todo" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    padding: 10,
    gap: 10,
  },
  title: {
    fontSize: 24,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
