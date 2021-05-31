import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Heading1 = props => {
    return (
        <Text style={styles.text(props.color? props.color : '#333333')}>{props.text? props.text : 'Heading1'}</Text>
    )
}

const styles = StyleSheet.create({
    text: color => {
        return {
            fontFamily: 'Causten-Bold',
            color,
            fontSize: 24
        }
    }
})

export default Heading1