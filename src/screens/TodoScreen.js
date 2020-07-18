import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme'
import { AppCard } from '../components/UI/AppCard'
import { EditModal } from '../components/EditModal'
import { AppText } from '../components/UI/AppText'
import { AppButton } from '../components/UI/AppButton'

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
                <AppText >{todo.title}</AppText>
                <AppButton
                    onPress={() => setModal(true)}
                >
                   <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>

            <View style={styles.menu}>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.GRAY_COLOR}
                        onPress={() => goBack()}
                    >
                        <AntDesign name='back' size={20} color='#fff' />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                    color={THEME.DANGER_COLOR}
                    onPress={() => onRemove(todo.id)}
                    >
                        <FontAwesome name='remove' size={20} color='#fff' />
                    </AppButton>
                       
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
        width: Dimensions.get('window').width / 3
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})