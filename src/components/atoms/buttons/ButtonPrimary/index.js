import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ButtonPrimary = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: "#7F43D6", borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: "Causten-SemiBold", fontSize: 18, color: "#fff", marginHorizontal: 52, marginVertical: 13}}>{props.label? props.label : 'Button'}</Text>
        </TouchableOpacity>
    )
}

export default ButtonPrimary