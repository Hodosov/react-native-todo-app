import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';

async function loadApplication() {
    await Font.loadAsync({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    })
}

export default function App() {

    const [isReady, setIsReady] = useState(false)
   

    if (!isReady) {
        return <AppLoading
            startAsync={loadApplication}
            onError={err => alert(err)}
            onFinish={() => setIsReady(true)}
        />
    } 

    return (
        <TodoState>
            <MainLayout />
        </TodoState>
    );
}
