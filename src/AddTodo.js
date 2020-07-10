import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
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
            <Button
                color='#007AFF'
                title='Добавить'
                onPress={() => pressHandler()} />
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
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 10,
    },
})