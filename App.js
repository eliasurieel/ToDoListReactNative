import { StyleSheet, Text, TextInput, View, Button, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const [borderColor, SetBorderColor] = useState('#A4031F')


  const onHandleFocus = () => {
    SetBorderColor('#73A580')
  }

  const onHandleBlur = () => {
    SetBorderColor('grey')
  }

  const onHandlerChangeText = (text) => {
    setTask(text)
  }

  const onHnadlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ])

    setTask('')
  }

  const onHandlerModal = (item) =>{
    setIsVisible(true)
    setSelectedTask(item)
  } 

  const onHandleDelete = (id) =>{
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    setIsVisible(false)

  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onHandlerModal(item)} style={styles.containerItem}>
      <Text style={styles.listItem} >{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { borderColor: borderColor }]}
          placeholder='Añadi una nueva tarea'
          autoCapitalize='none'
          autoCorrect={false}
          cursorColor='#6303C9'
          selectionColor='#6303C9'
          placeholderTextColor='#6303C9'
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
          onChangeText={onHandlerChangeText}
          value={task}
        />
        <Button disabled={task.length === 0} title='Crear' color='#6303C9' onPress={onHnadlerCreateTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        style={styles.listContainer}
        contentContainerStyle={styles.list}
        alwaysBounceVertical={false}
        keyExtractor={item => item.id}
      />
      <Modal visible={isVisible} animationType='fade'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la tarea</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Estas seguro que quieres borrar este item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
            title='Cancelar'
            color='blue'
            onPress={() => setIsVisible(false)}
            />
            <Button
            title='Borrar'
            color='red'
            onPress={() => onHandleDelete(selectedTask?.id)}
            />
          </View>
        </View>

      </Modal>
    </View>
    
  );
}

