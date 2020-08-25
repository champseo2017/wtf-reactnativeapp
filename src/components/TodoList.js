import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const TodoList = ({ todos, toggleTodo }) => (
  <View style={{padding: 20}}>
    {todos.map((todo,i) => (
      <TouchableOpacity key={i} onPress={() => toggleTodo(todo.id)}>
        <Text
          style={{
            fontSize: 24,
            textDecorationLine: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TodoList;
