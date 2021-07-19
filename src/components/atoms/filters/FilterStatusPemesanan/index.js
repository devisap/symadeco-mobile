import React, { useState,useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Heading2 from '../../typography/Heading2'
import Icon from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import { useRef } from 'react'

const FilterStatusPemesanan = props => {
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
                    <Picker.Item label="Baru" value="Baru" />
                    <Picker.Item label="Cek Lokasi" value="Cek Lokasi" />
                    <Picker.Item label="Booking" value="Booking" />
                    <Picker.Item label="Deal" value="Deal" />
                    <Picker.Item label="Dikirim" value="Dikirim" />
                    <Picker.Item label="Produksi" value="Produksi" />
                    <Picker.Item label="Dibongkar" value="Dibongkar" />
                    <Picker.Item label="Selesai" value="Selesai" />
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

export default FilterStatusPemesanan