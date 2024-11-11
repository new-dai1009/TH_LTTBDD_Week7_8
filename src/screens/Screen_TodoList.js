import React, { useEffect, useState } from "react";
import TodoList_Data from "../constant/TodoList_Data";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { setInitialTodos, addTodo } from "../redux/Redux_actions";

const Screen_TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos); 
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        dispatch(setInitialTodos(TodoList_Data));
    }, [dispatch]);

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;
        dispatch(addTodo(newTodo));
        setNewTodo('');
    };

    return ( 
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Todo List</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập công việc mới..."
                    value={newTodo}
                    onChangeText={setNewTodo}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
                    <Text style={styles.buttonText}>Thêm</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={todoList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => ( 
                    <View style={styles.itemContainer}> 
                        <Text style={styles.textStyle}>{item.text}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.buttonText}>Sửa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton}>
                                <Text style={styles.buttonText}>Xóa</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#4a90e2',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    textStyle: {
        fontSize: 16,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    editButton: {
        backgroundColor: '#f0ad4e',
        padding: 8,
        borderRadius: 5,
        marginRight: 5,
    },
    deleteButton: {
        backgroundColor: '#d9534f',
        padding: 8,
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: '#5cb85c',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default Screen_TodoList;
