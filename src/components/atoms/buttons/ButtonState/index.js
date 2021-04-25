import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ButtonState = (props) => {
    const [textColor, setTextColor] = useState('#333')
    const [bgColor, setBgColor] = useState('#f2f2f2')
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if(props.state){
            if(props.state == "success"){
                setTextColor('#3CE500')
                setBgColor('#D4FFC4')
            }else if(props.state == 'info'){
                setTextColor('#0585FB')
                setBgColor('#C4E3FF')
            }else if(props.state == 'warning'){
                setTextColor('#FBBC05')
                setBgColor('#FFF0C4')
            }else if(props.state == 'danger'){
                setTextColor('#E50000')
                setBgColor('#FFC4C4')
            }
        }
        if(props.isActive){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    })

    return (
        <View style={{backgroundColor: bgColor, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <Text style={{fontFamily: "Causten-SemiBold", fontSize: 12, color: textColor, marginVertical: 11, marginLeft: 11, marginRight: 7}}>{props.text? props.text : 'Button'}</Text>
            {
                isActive?
                <Icon name={"chevron-down"} size={14} color={textColor}/>
                :
                <Icon name={"chevron-right"} size={14} color={textColor}/>
            }
        </View>
    )
}

export default ButtonState