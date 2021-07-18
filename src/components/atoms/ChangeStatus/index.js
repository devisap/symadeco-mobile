import React, { useState,useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Heading2 from '../../typography/Heading2'
import Icon from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import { useRef } from 'react'

const ChangeStatus = props => {
    const [selectedValue, setSelectedValue] = useState('Status')

    useEffect(() => {
        props.onChangeFilter && props.onChangeFilter(props.inputName, selectedValue)
    }, [selectedValue])
    
    const pickerRef = useRef()
    const open = () => {
        pickerRef.current.focus()
    }
    
    return (
        <>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.container}
                onPress={() => open()}
            >
                <Picker
                    ref={pickerRef}
                    selectedValue={selectedValue}
                    onValueChange={itemValue  => setSelectedValue(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Status" value="Status" />
                    <Picker.Item label="Aktif" value="Aktif" />
                    <Picker.Item label="Tidak Aktif" value="Tidak Aktif" />
                </Picker>
                <Heading2 text={selectedValue} />
                <Icon name="chevron-down" color="#333" size={24} style={styles.btnIcon} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15, 
        zIndex: -999
    },
    picker: {
        position: 'absolute'
    },
    btnIcon: {
        marginLeft: 5
    }
})

export default ChangeStatus