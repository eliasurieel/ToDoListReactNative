import { Button, TextInput, View } from "react-native";

import { styles } from "./styles";

const InputTask = ({
  borderColor,
  onHandleFocus,
  onHandleBlur,
  onHandlerChangeText,
  task,
  onHnadlerCreateTask,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="Añadi una nueva tarea"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#6303C9"
        selectionColor="#6303C9"
        placeholderTextColor="#6303C9"
        onFocus={onHandleFocus}
        onBlur={onHandleBlur}
        onChangeText={onHandlerChangeText}
        value={task}
      />
      <Button
        disabled={task.length === 0}
        title="Crear"
        color="#6303C9"
        onPress={onHnadlerCreateTask}
      />
    </View>
  );
};

export default InputTask;
