import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";

import { InputTask, TaskItem } from "./components";
import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [borderColor, SetBorderColor] = useState("#A4031F");

  const onHandleFocus = () => {
    SetBorderColor("#73A580");
  };

  const onHandleBlur = () => {
    SetBorderColor("grey");
  };

  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const onHnadlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);

    setTask("");
  };

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => (
    <TaskItem item={item} onPressItem={onHandlerModal} />
  );

  return (
    <View style={styles.container}>
      <InputTask
        borderColor={borderColor}
        onHandleBlur={onHandleBlur}
        onHandlerChangeText={onHandlerChangeText}
        onHnadlerCreateTask={onHnadlerCreateTask}
        onHandleFocus={onHandleFocus}
        task={task}
      />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        style={styles.listContainer}
        contentContainerStyle={styles.list}
        alwaysBounceVertical={false}
        keyExtractor={(item) => item.id}
      />
      <Modal visible={isVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la tarea</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>
              Estas seguro que quieres borrar este item?
            </Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title="Cancelar"
              color="blue"
              onPress={() => setIsVisible(false)}
            />
            <Button
              title="Borrar"
              color="red"
              onPress={() => onHandleDelete(selectedTask?.id)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
