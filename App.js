import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {

    const [todos, setTodos] = useState([])

    const addTodo = (title) => {

        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title
        }])
    }

    const removeTodo = (id) => {
        setTodos(prev => prev.filter((todo) => todo.id !== id))
    }

    return (
        <View>
            <Navbar title='Todo App' />
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />
                <FlatList 
                style={styles.todoList}
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({item}) => (
                    <Todo key={item.id} todo={item} onRemoveTodo={removeTodo} />
                )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    todoList: {
        flexDirection: 'column'
    }
})
