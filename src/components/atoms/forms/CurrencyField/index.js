import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const CurrencyField = props => {
    return (
        <>
            <Text style={styles.label}>{props.label? props.label : 'Label'}</Text>
            <View style={styles.inputBox}>
                <TextInput 
                    placeholder={props.label? props.label : 'undefined'}
                    placeholderTextColor="#CBCBCB"
                    style={styles.inputField}
                    keyboardType="number-pad"
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