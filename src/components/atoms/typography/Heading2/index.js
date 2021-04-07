import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

const Heading2 = (props) => {
    const [textColor, setTextColor] = useState('#333')

    useEffect(() => {
        if(props.color){
            setTextColor(props.color)
        }
    }, [])
    return (
        <Text style={{fontFamily: "Causten-Bold", color: textColor, fontSize: 24}}>{props.text? props.text : 'Heading2'}</Text>
    )
}

export default Heading2