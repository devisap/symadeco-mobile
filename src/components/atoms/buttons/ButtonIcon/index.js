import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Paragraph from '../../typography/Paragraph'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'

const ButtonIcon = () => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            style={{flexDirection: 'row', justifyContent: 'center', borderRadius: 5, backgroundColor: "#7F43D6", paddingVertical: 15, paddingHorizontal: 23}}
        >
            <IconFA5 name={"plus"} size={18} color={'#fff'} />
            <View style={{marginLeft: 15}}>
                <Paragraph text={'Tambah'} color={"#fff"} />
            </View>
        </TouchableOpacity>
    )
}

export default ButtonIcon