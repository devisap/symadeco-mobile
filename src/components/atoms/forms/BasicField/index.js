import React, { useState } from 'react'
import { TextInput, View } from 'react-native'

const BasicField = (props) => {
    const [color, setColor] = useState('#cbcbcb')

    return (
        <View>
            <TextInput 
                placeholder={props.text? props.text : 'BasicField'}
                placeholderTextColor="#cbcbcb"
                selectionColor={"#DDCDF4"}
                style={{paddingHorizontal: 40, borderRadius: 15, backgroundColor: "#fff", fontFamily: "Causten-Medium", fontSize: 18, borderColor: color, borderWidth: 2, color: "#333"}}
                onFocus={() => setColor('#7F43D6')}
                onBlur={() => setColor('#cbcbcb')}
            />
        </View>
    )
}

export default BasicField