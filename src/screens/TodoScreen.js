import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

export const TodoScreen = ({ goBack, todo, removeTodo }) => {
    return (
        <View style={styles.container}>
            <Text>{todo.title}</Text>
            <View style={styles.menu}>
                <View style={styles.button}>
                    <Button
                        title='Назад'
                        color='#757575'
                        onPress={goBack}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Удалить'
                        color='#e53935'
                        onPress={() => Alert.alert('удалить')}
                        
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    menu: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    button: {
        width: '50%'
    }
})