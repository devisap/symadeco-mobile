import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

const BasicField = props => {
    return (
        <>
            <Text style={styles.label}>{props.label? props.label : 'Label'}</Text>
            <TextInput 
                placeholder={props.label? props.label : 'undefined'}
                placeholderTextColor="#CBCBCB"
                style={styles.inputField}
            />
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Causten-SemiBold',
        color: "#7F43D6",
        fontSize: 18,
    },
    inputField: {
        fontFamily: 'Causten-Medium',
        fontSize: 14,
        color: "#333",
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 20,
        marginTop: 10
    }
})

export default BasicField