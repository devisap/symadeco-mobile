import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownField = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    return (
        <DropDownPicker
        zIndex={3000}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        />
    );
}

const styles = StyleSheet.create({

})

export default DropdownField