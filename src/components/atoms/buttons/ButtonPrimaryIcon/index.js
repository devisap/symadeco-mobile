import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Heading2 from '../../typography/Heading2'

const ButtonPrimaryIcon = props => {
    return (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <Icon name={props.icon} color="#fff" size={24} style={styles.btnIcon} />
            <Heading2 text={props.text? props.text : 'Button'} color="#fff" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#7F43D6',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    btnIcon: {
        marginRight: 5
    }
})

export default ButtonPrimaryIcon