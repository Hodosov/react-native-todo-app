import React, {useState, useContext} from 'react'
import {View} from 'react-native'
import {Navbar} from '../src/components/Navbar'
import {MainScreen} from '../src/screens/MainScreen'
import {TodoScreen} from '../src/screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'
import { ScreenContext } from './context/screen/screenContext'


export const MainLayout = () => {

    const { todoId } = useContext(ScreenContext)

    return (
        <View>
            <Navbar title='Todo App' />
            { todoId ? <TodoScreen /> : <MainScreen />}
        </View>
    )
} 