import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Heading2 = props => {
    return (
        <Text style={styles.text(props.color? props.color : '#333333')}>{props.text? props.text : 'Heading2'}</Text>
    )
}

const styles = StyleSheet.create({
    text: color => {
        return {
            fontFamily: 'Causten-Medium',
            color,
            fontSize: 18
        }
    }
})

export default Heading2