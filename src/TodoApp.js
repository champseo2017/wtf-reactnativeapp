import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import AddTodo from './containers/AddTodo'

export class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TodoApp;
