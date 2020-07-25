import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Navbar } from '../src/components/Navbar'
import { MainScreen } from '../src/screens/MainScreen'
import { TodoScreen } from '../src/screens/TodoScreen'
import { ScreenContext } from './context/screen/screenContext'


export const MainLayout = () => {

    const { todoId } = useContext(ScreenContext)

    return (
        <View style={styles.wrapper}>
            <Navbar title='Todo App' />
            { todoId ? <TodoScreen /> : <MainScreen />}
        </View>
    )
} 

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})