import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { getFullDate } from '../../../../utils/DateFunction'

const DateField = props => {
    const [date, setDate]               = useState(new Date());
    const [mode, setMode]               = useState('date');
    const [show, setShow]               = useState(false);

    const [dateString, setDateString]   = useState('')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setDateString(getFullDate(currentDate))
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <>
            <Text style={styles.label}>{props.label? props.label : 'Label'}</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => showDatepicker()}>
                <TextInput 
                    editable={false}
                    value={dateString}
                    placeholder={props.label? props.label : 'undefined'}
                    placeholderTextColor="#CBCBCB"
                    style={styles.inputField}
                />
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Causten-SemiBold',
        color: "#7F43D6",
        fontSize: 18,
    },
    inputField: {
        fontFamily: 'Causten-Medium',
        fontSize: 14,
        color: "#333",
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 20,
        marginTop: 10
    }
})

export default DateField