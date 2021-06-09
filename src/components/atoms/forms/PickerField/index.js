import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Heading3 from '../../typography/Heading3'
import Icon from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'

const PickerField = props => {
    const [listItemRendered, setListItemRendered]   = useState()
    const [selectedItem, setSelectedItem]           = useState('')
    const [listItem, setListItem]                   = useState([
        {label: 'item1', value: 'item1'},
        {label: 'item2', value: 'item2'}
    ])

    useEffect(() => {
        if(props.listItem)
            renderListItem(props.listItem)
        else
            renderListItem(listItem)
    }, [])

    const renderListItem = li => {
        let list = li.map((obj, id) => (
            <Picker.Item key={id} label={obj.label} value={obj.value} />
        ))
        setListItemRendered(list)
    }

    const pickerRef = useRef()
    const open = () => {
        pickerRef.current.focus()
    }

    return (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.8}
            onPress={() => open()}
        >
            <Heading3 text={selectedItem? selectedItem : props.label} />
            <View style={styles.btnIcon}>
                <Icon name="chevron-down" size={16} color="#333" />
            </View>
            <Picker
                ref={pickerRef}
                selectedValue={selectedItem}
                onValueChange={item => setSelectedItem(item)}
                style={styles.picker}
                itemStyle={{zIndex: 100000}}
            >
                { listItemRendered }
            </Picker>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CBCBCB',
        paddingVertical: 10,
        paddingLeft: 10
    },
    picker: {
        position: 'absolute'
    },
    btnIcon: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10
    }
})

export default PickerField