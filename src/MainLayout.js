import React, {useState, useContext} from 'react'
import {View} from 'react-native'
import {Navbar} from '../src/components/Navbar'
import {MainScreen} from '../src/screens/MainScreen'
import {TodoScreen} from '../src/screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'


export const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext)
    const [todoId, setTodoId] = useState(null)
    // const [todos, setTodos] = useState([])

    // const addTodo = (title) => {

    //     setTodos(prev => [...prev, {
    //         id: Date.now().toString(),
    //         title
    //     }])
    // }

    // const removeTodo = (id) => {

    //     const todo = todos.find(el => el.id === id)

    //     Alert.alert(
    //         'Удаление элемента',
    //         `Вы уверены что хотите удалить ${todo.title}?`,
    //         [
    //             {
    //                 text: 'Отмена',
    //                 style: 'cancel'
    //             },
    //             {
    //                 text: 'Удалить',
    //                 style: 'destructive',
    //                 onPress: () => {
    //                     setTodoId(null)
    //                     setTodos(prev => prev.filter((todo) => todo.id !== id))
    //                 }
    //             }
    //         ],
    //         { cancelable: true }
    //     );
    // }

    // const updateTodo = (id, title) => {
    //     setTodos(old => old.map(todo => {
    //         if (todo.id === id) {
    //             todo.title = title
    //         }
    //         return todo
    //     }))
    // }


    let content = <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo} onOpen={(id) => setTodoId(id)} />

    if (todoId) {
        const selectedToDo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedToDo} onRemove={removeTodo} onSave={updateTodo} />
    }

    return (
        <View>
            <Navbar title='Todo App' />
            {content}
        </View>
    )
} 