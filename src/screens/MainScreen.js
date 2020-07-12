import React from 'react'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { View, FlatList, StyleSheet } from 'react-native'

export const MainScreen = ({ addTodo, todos, removeTodo, onOpen }) => {
    return (
        <View>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />
                <FlatList
                    style={styles.todoList}
                    keyExtractor={item => item.id}
                    data={todos}
                    renderItem={({ item }) => (
                        <Todo
                            key={item.id}
                            todo={item}
                            onRemoveTodo={removeTodo}
                            onOpen={onOpen} />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
})