import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const SearchBox = () => {
    return (
        <>
            <TextInput 
                placeholder="Cari"
                placeholderTextColor="#CBCBCB"
                style={styles.inputText}
            />
            <Icon name="search" size={20} color="#CBCBCB" style={styles.inputIcon} />
        </>
    )
}

const styles = StyleSheet.create({
    inputText: {
        fontFamily: 'Causten-Medium',
        color: '#333',
        fontSize: 18,
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingLeft: 60
    },
    inputIcon: {
        position: 'absolute',
        top: 13,
        left: 24
    }
})

export default SearchBox