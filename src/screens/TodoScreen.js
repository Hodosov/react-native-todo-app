import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/UI/AppCard'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {

    const [modal, setModal] = useState(false)

    const saveHandler = (title) => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View style={styles.container}>
            <EditModal visible={modal} onCancel={() => setModal(false)} value={todo.title} onSave={saveHandler} />
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button 
                title='ред.' 
                onPress={() => setModal(true)}
                />
            </AppCard>

            <View style={styles.menu}>
                <View style={styles.button}>
                    <Button
                        title='Назад'
                        color={THEME.GRAY_COLOR}
                        onPress={goBack}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Удалить'
                        color={THEME.DANGER_COLOR}
                        onPress={() => onRemove(todo.id)}
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
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})