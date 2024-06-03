import { Text, View, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native';
import React, {useState} from 'react';
import { Button } from '@rneui/base';
import { ComponentModalTask } from './Modal';
import { ModalEditTask } from './Modal';
import { ViewTaskModal } from './Modal';
import { StylesHome } from './Styles';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [tasks, setTasks] = useState([
        { username: 'Task1', description: 'Descripción1', author: 'Valeria', date: '22/07/2007' },
        { username: 'Task2', description: 'Descripción2', author: 'David', date: '11/04/2004' },
        { username: 'Task3', description: 'Descripción3', author: 'Valeria', date: '22/07/2007' },
        { username: 'Task4', description: 'Descripción4', author: 'David', date: '11/04/2004' },
        { username: 'Task5', description: 'Descripción5', author: 'Valeria', date: '22/07/2007' },
    ])

    const [selectedTask, setSelectedTask] = useState(null)

    const openModal = () => setModalVisible(true);

    const openModal2 = (task) => {
        setSelectedTask(task);
        setModalVisible2(true);
    };
    const openModal3 = (task) => {
        setSelectedTask(task)    
        setModalVisible3(true)
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
        console.log("Nueva tarea:", task);
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.username === selectedTask.username ? updatedTask : task)));
        setSelectedTask(null);
    }

    const completeTask = (taskToComplete) => {
        setTasks(tasks.filter(task => task.username !== taskToComplete.username));
        setSelectedTask(null);
        setModalVisible3(false);
    };

    return(
        <>
            <View style={{flex:1}}>
                <Text style={StylesHome.title}>
                    Tareas
                </Text>
                <Button 
                    buttonStyle={StylesHome.button}
                    title='Crear' 
                    onPress={openModal} 
                />

                <FlatList
                    
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            onPress={() => openModal3(item)}
                            style={StylesHome.taskItem}
                        >
                            <View>
                                <Text>{item.username}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <ViewTaskModal 
                    visible={modalVisible3} 
                    setVisible={setModalVisible3} 
                    task={selectedTask} 
                    openEditModal={openModal2} 
                    completeTask={completeTask}
                />

                <ModalEditTask 
                    visible={modalVisible2} 
                    setVisible={setModalVisible2} 
                    task={selectedTask} 
                    updateTask={updateTask} 
                />
                <ComponentModalTask 
                    visible={modalVisible} 
                    setVisible={setModalVisible} 
                    addTask={addTask}
                />
            </View>
        </>
    )
}


export default Home