import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownSearchField = props => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    useEffect(() => {
        props.items && setItems(props.items)
        props.value && setValue(props.value)
    }, [])

    useEffect(() => {
        props.onChangeValue && props.onChangeValue(props.inputName, value)
    }, [value])

    return (
        <View>
            <Text style={styles.label}>{props.label? props.label : 'Label'}</Text>
            <DropDownPicker
                placeholder={props.label? props.label : 'Label'}
                style={styles.dropdown}
                searchable={true}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeItem={item => setValue(item.value)}
                defaultValue={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Causten-SemiBold',
        color: "#7F43D6",
        fontSize: 18,
    },
    dropdown: {
        marginTop: 10
    }
})

export default DropdownSearchField