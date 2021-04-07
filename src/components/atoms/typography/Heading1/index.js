import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

const Heading1 = (props) => {
    const [textColor, setTextColor] = useState('#333')

    useEffect(() => {
        if(props.color){
            setTextColor(props.color)
        }
    })
    return (
        <Text style={{fontFamily: "Causten-Bold", color: textColor, fontSize: 28}}>{props.text? props.text : 'Heading1'}</Text>
    )
}

export default Heading1