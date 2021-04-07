import React, { useRef } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchField = () => {
    const input = useRef(null)
    return (
        <TouchableOpacity 
            activeOpacity={1} 
            style={{flexDirection: 'row', alignItems: 'center', backgroundColor: "#fff", borderRadius: 15, paddingVertical: 7, paddingHorizontal: 30}}
            onPress={() => input.current.focus()}>
            <Icon name={'search'} size={18} color={"#cbcbcb"} />
            <TextInput 
                ref={input}
                placeholder={"Search"} 
                placeholderTextColor={"#cbcbcb"}
                selectionColor={"#DDCDF4"}
                style={{marginLeft: 15, fontFamily: 'Causten-Medium', color: "#333", fontSize: 18}}
            />
        </TouchableOpacity>
    )
}

export default SearchField