import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {

    const [todoId, setTodoId] = useState('1')
    const [todos, setTodos] = useState([{
        id: '1',
        title: 'написать приложенеи'
    }])

    const addTodo = (title) => {

        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title
        }])
    }

    const removeTodo = (id) => {
        setTodos(prev => prev.filter((todo) => todo.id !== id))
    }


    let content = <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo} onOpen={(id) => setTodoId(id)} />

    if (todoId) {
        const selectedToDo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedToDo} removeTodo={removeTodo} />
    }

    return (
        <View>
            <Navbar title='Todo App' />
            { content }
        </View>
    );
}

const styles = StyleSheet.create({
    todoList: {
        flexDirection: 'column'
    }
})
