import React, {useState, useEffect} from 'react'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { View, FlatList, StyleSheet, Image, Dimensions } from 'react-native'

export const MainScreen = ({ addTodo, todos, removeTodo, onOpen }) => {

    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - 35)

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - 60
            setDeviceWidth(width)
        }

        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })

   

    let content = <View style={{ width: deviceWidth }}>
        <FlatList
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

    if (!todos.length) {
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
        paddingHorizontal: 20,
        marginTop: 10
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
    },
    todoList: {
    }
})