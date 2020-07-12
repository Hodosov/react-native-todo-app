import React from 'react'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { View, FlatList, StyleSheet, Text, Image } from 'react-native'

export const MainScreen = ({ addTodo, todos, removeTodo, onOpen }) => {

    let content = <FlatList
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

        if(!todos.length) {
            content = <View style={styles.imgWrap}>
                <Image style={styles.image} source={require('../../src/no-items.png')} />
            </View>
        }

    return (
        <View>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />
                    {content}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})