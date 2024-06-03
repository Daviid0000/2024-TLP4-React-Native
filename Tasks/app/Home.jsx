import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { Button } from '@rneui/base';
import { ComponentModalTask } from './Modal';
import { createTask } from './Validations';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [tasks, setTasks] = useState([
        {
            name: 'Task1',
            description: 'Descripción1',
            author: 'David',
            date: '11/04/2004'
        },
       
    ])

    const openModal = () => {
        setModalVisible(true)
    }

    const addTask = (task) => {
        setTasks([...tasks, task]);
        console.log("Nueva tarea:", task);
    };

    return(
        <>
            <View>
                <Text style={styles.title}>
                    Crea tus tareas
                </Text>
                <Button 
                buttonStyle={styles.button}
                title='Crear Tarea' 
                onPress={openModal} />

                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity>

                        <View style={styles.taskItem}>
                            <Text>{item.name}</Text>
                            <Text>{item.description}</Text>
                            <Text>{item.author}</Text>
                            <Text>{item.date}</Text>
                            <Button 
                                buttonStyle={styles.button}
                                title='Editar'
                            />
                        </View>
                        </TouchableOpacity>
                    )}
                />
               
                <ComponentModalTask visible={modalVisible} setVisible={setModalVisible} addTask={addTask}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        textAlign: 'center'
    },
    button:{
        borderRadius: 20,
        marginHorizontal: 'auto'
      },
      taskItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
  })
export default Home