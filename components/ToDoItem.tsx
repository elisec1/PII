import React from "react";
import { StyleSheet, Switch } from "react-native";
import { Todo } from "../services/todo.service";
import { Text, View } from "../components/Themed";

interface ToDoItemProps {
  todo: Todo;
  onDelete: (task: string) => void;
  //onToggle: (task: string) => void;
  onChangeValue: (task: string) => void;
}

class ToDoItem extends React.Component<ToDoItemProps, {}> {
  onChangeValue = () => {
    const task = this.props.todo.task;
    this.props.onChangeValue(task);
  };

  onDelete = () => {
    const task = this.props.todo.task;
    this.props.onDelete(task);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.todo.task}</Text>
        <Switch
          value={this.props.todo.completed}
          onValueChange={this.onChangeValue}
        />
      </View>
    );
  }
}

export default ToDoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    margin: 10,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    borderRadius: 30,
  },
});
