import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, CLEAR_ERROR, SHOW_ERROR, FETCH_TODOS } from '../types'
import { ScreenContext } from '../screen/screenContext'
import { Http } from './../../http'

export const TodoState = ({ children }) => {

    const initialState = {
        todos: [],
        loading: false,
        error: null
    }

    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async (title) => {
        clearError()
        try {
            const data = await Http.post('https://rn-todo-list-a7ed4.firebaseio.com/todos.json', { title })
            dispatch({ type: ADD_TODO, title, id: data.name })
        } catch(err) {
            showError(err)
        }

        // const response = await fetch(
        //     'https://rn-todo-list-a7ed4.firebaseio.com/todos.json',
        //     {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ title })
        //     })
        // const data = await response.json()
        
    }

    const removeTodo = (id) => {

        const todo = state.todos.find(el => el.id === id)

        Alert.alert(
            'Удаление элемента',
            `Вы уверены что хотите удалить ${todo.title}?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: async () => {                        
                        changeScreen(null)
                        await Http.delete(`https://rn-todo-list-a7ed4.firebaseio.com/todos/${id}.json`)
                        dispatch({ type: REMOVE_TODO, id })
                    }
                }
            ],
            { cancelable: true }
        );
    }

    const fetchTodos = async () => {
        showLoader()
        clearError()
        try {
            const response = await fetch('https://rn-todo-list-a7ed4.firebaseio.com/todos.json', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            // const data = await Http.get('https://rn-todo-list-a7ed4.firebaseio.com/todos.json')
            const data = await response.json()

            const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }))

            dispatch({ type: FETCH_TODOS, todos })
        } catch (err) {
            showError('Что-то пошло не так :((')
            console.log(err)
        } finally {
            hideLoader()
        }
    }

    const updateTodo = async (id, title) => {
        clearError()
        try {
            await fetch(`https://rn-todo-list-a7ed4.firebaseio.com/todos/${id}.json`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            })
            // await Http.patch('https://rn-todo-list-a7ed4.firebaseio.com/todos/${id}.json')
            dispatch({ type: UPDATE_TODO, id, title })
        } catch (err) {
            showError('Что-то пошло не так...')
            console.log(err)
        }

    }

    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = (error) => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({ type: CLEAR_ERROR })

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            loading: state.loading,
            error: state.error,
            addTodo,
            removeTodo,
            updateTodo,
            fetchTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}