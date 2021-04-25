import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

const Paragraph = (props) => {
    const [textColor, setTextColor] = useState('#333')

    useEffect(() => {
        if(props.color){
            setTextColor(props.color)
        }
    })
    return(
        <Text style={{fontFamily: 'Causten-Medium', color: textColor, fontSize: 12}}>{props.text? props.text : 'Paragraph'}</Text>
    )
}

export default Paragraph