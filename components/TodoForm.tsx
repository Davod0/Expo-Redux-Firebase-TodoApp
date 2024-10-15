import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function TodoForm() {
  const handleSubmit = () => {};
  return (
    <View style={s.root}>
      <Text style={s.title}>Add a new todo</Text>
      <View style={s.row}>
        <TextInput style={s.input} placeholder="What needs to be done?" />
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
