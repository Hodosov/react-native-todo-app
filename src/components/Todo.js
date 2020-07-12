import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemoveTodo, onOpen }) => {
    
    return (
        <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={() => onOpen(todo.id)}
        onLongPress={() =>onRemoveTodo(todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'column',
        padding: 15,
        margin: 5,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5
    }
})