import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const CurrencyField = props => {
    const [value, setValue] = useState('')

    useEffect(() => {
        props.value && setValue(props.value)
    }, [])

    useEffect(() => {
        props.onChangeValue && props.onChangeValue(props.inputName, value)
    }, [value])

    return (
        <>
            <Text style={styles.label}>{props.label? props.label : 'Label'}</Text>
            <View style={styles.inputBox}>
                <TextInput 
                    placeholder={props.label? props.label : 'undefined'}
                    placeholderTextColor="#CBCBCB"
                    style={styles.inputField}
                    keyboardType="number-pad"
                    onChangeText={text => setValue(text)}
                    defaultValue={value}
                />
                <Text style={styles.textCurr}>Rp.</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Causten-SemiBold',
        color: "#7F43D6",
        fontSize: 18,
    },
    inputBox: {
        flexDirection: 'row'
    },
    inputField: {
        flex: 1,
        fontFamily: 'Causten-Medium',
        fontSize: 14,
        color: "#333",
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingLeft: 50,
        paddingRight: 20,
        marginTop: 10
    },
    textCurr: {
        fontFamily: 'Causten-SemiBold',
        color: "#7F43D6",
        fontSize: 14,
        position: 'absolute',
        top: 25,
        left: 20
    }
})

export default CurrencyField