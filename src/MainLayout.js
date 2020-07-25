import React, { useState, useContext } from 'react'
import { View } from 'react-native'
import { Navbar } from '../src/components/Navbar'
import { MainScreen } from '../src/screens/MainScreen'
import { TodoScreen } from '../src/screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'
import { ScreenContext } from './context/screen/screenContext'


export const MainLayout = () => {

    const { todoId } = useContext(ScreenContext)

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

    return (
        <View>
            <Navbar title='Todo App' />
            { todoId ? <TodoScreen /> : <MainScreen />}
        </View>
    )
} 