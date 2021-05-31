import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Heading3 = props => {
    return (
        <Text style={styles.text(props.color? props.color : '#333333')}>{props.text? props.text : 'Heading3'}</Text>
    )
}

const styles = StyleSheet.create({
    text: color => {
        return {
            fontFamily: 'Causten-SemiBold',
            color,
            fontSize: 14
        }
    }
})

export default Heading3