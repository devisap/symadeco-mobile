import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const ButtonSubmit = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <LinearGradient 
                start={{x: 0.7, y: 0.5}} 
                end={{x: 0.9, y: 0.1}} 
                colors={['#AF65FF', '#9F4BFE']} 
                style={styles.containter}
            >
                <Text style={styles.text}>{props.title? props.title : 'Button'}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containter: {
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 14
    },
    text: {
        fontFamily: 'Causten-Bold',
        fontSize: 18,
        color: '#fff'
    }
})

export default ButtonSubmit