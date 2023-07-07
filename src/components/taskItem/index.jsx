import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ onHandlerModal, item }) => {
  return (
    <TouchableOpacity
      onPress={() => onHandlerModal(item)}
      style={styles.containerItem}
    >
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
