import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Paragraph = props => {
    return (
        <Text style={styles.text(props.color? props.color : '#333333')}>{props.text? props.text : 'Paragraph'}</Text>
    )
}

const styles = StyleSheet.create({
    text: color => {
        return {
            fontFamily: 'Causten-Medium',
            color,
            fontSize: 12
        }
    }
})

export default Paragraph