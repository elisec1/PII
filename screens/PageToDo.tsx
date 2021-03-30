import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ToDoInput from "../components/ToDoInput";
import ToDoItem from "../components/ToDoItem";
import ToDoService, { Todo } from "../services/todo.service";
import { Text, View } from "../components/Themed";

interface ToDoScreenState {
  text: string;
  todos: Array<Todo>;
}

class PageToDo extends React.Component<{}, ToDoScreenState> {
  state: ToDoScreenState = {
    text: "",
    todos: [],
  };

  componentDidMount = () => {
    this.loadTodos();
  };

  loadTodos = () => {
    ToDoService.getAll().then((todos) => this.setState({ todos }));
  };

  onChangeText = (text: string) => {
    this.setState({ text });
  };

  onSubmitingEditing = () => {
    ToDoService.add(this.state.text);
    this.loadTodos();
  };

  removeTodo = (task: string) => {
    ToDoService.remove(task);
    this.loadTodos();
  };

  onChangeValue = (task: string) => {
    ToDoService.toggle(task);
    this.loadTodos();
  };

  render() {
    return (
      <View
        style={styles.container}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <ToDoInput
          onSubmitingEditing={this.onSubmitingEditing}
          onChangeText={this.onChangeText}
        />
        <FlatList
          data={this.state.todos}
          keyExtractor={(item) => item.task}
          renderItem={({ item }: { item: Todo }) => (
            <ToDoItem
              todo={item}
              onChangeValue={this.onChangeValue}
              onDelete={this.removeTodo}
              //onToggle={this.props.togleTodo}
            />
          )}
        />
      </View>
    );
  }
}

export default PageToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
  },

  text: {
    justifyContent: "center",
    margin: 10,
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
});
