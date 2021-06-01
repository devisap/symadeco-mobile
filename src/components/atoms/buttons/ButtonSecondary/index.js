import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonSecondary = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.title}>{props.title? props.title : 'Button'}</Text>
        </TouchableOpacity>
    )
}   

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontFamily: 'Causten-Bold',
        color: '#333',
        fontSize: 18
    }
})

export default ButtonSecondary