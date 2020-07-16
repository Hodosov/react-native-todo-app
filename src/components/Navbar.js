import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../theme'
import { AppText } from './UI/AppText'

export const Navbar = ({ title }) => {
    
    return(
        <View style={styles.navbar}>
            <AppText style={styles.text}>
                {title}
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
})