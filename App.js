import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';
import { ScreenState } from './src/context/screen/ScreenState'

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
        <ScreenState>
            <TodoState>
                <MainLayout />
            </TodoState>
        </ScreenState>
    );
}
