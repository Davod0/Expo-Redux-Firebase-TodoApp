import { Button, StyleSheet, Text, View } from "react-native";
import { mockedTodos } from "./data";

export default function HomeScreen() {
    return (
        <View style={s.root}>
            <Text>Home Screen</Text>
            {mockedTodos.map(todo => (
                <View style={s.item} key={todo.id}>
                    <Text style={{ flex: 1 }}>{todo.text}</Text>
                    <Button title="Done" />
                </View>
            ))}
        </View>
    )
}

const s = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff"
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    }
})