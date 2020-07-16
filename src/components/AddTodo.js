import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { THEME } from '../theme'

export const AddTodo = (props) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            props.onSubmit(value)
        } else {
            Alert.alert('название не может быть пустым!')
        }
        setValue('')
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setValue(text)}
                value={value}
                placeholder='Введите название дела...'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='default'
            />
            <AntDesign.Button onPress={() => pressHandler()} name='pluscircleo'>
                Добавить
            </AntDesign.Button>

            {/* <Button
                color='#007AFF'
                title='Добавить'
                onPress={() => pressHandler()} /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 10,
    },
})