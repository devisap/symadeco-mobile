import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Popover from 'react-native-popover-view'
import Icon from 'react-native-vector-icons/Ionicons'
import DropdownField from '../../forms/DropdownField'
import PickerField from '../../forms/PickerField'
import Heading2 from '../../typography/Heading2'
import Heading3 from '../../typography/Heading3'

const FilterMarketingNStatus = () => {
    const [pickerStatusItem, setPickerStatusItem] = useState([
        {label: 'Pilih Status', value: 'Pilih Status'},
        {label: 'Aktif', value: 'Aktif'},
        {label: 'Tidak Aktif', value: 'Tidak Aktif'},
    ])
    const [pickerMarketingItem, setPickerMarketingItem] = useState([
        {label: 'Pilih Marketing', value: 'Pilih Marketing'},
        {label: 'Marketing A', value: 'Marketing A'},
        {label: 'Marketing B', value: 'Marketing B'},
        {label: 'Marketing C', value: 'Marketing C'},
    ])

    return (
        <Popover
            popoverStyle={styles.popover}
            from={(
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonFilter}>
                    <Icon name="filter" size={24} color="#333" style={styles.btnIcon} />
                    <Heading2 text="Filter" />
                </TouchableOpacity>
            )}
        >
            <View style={styles.popoverMenu}>
                <View style={styles.popoverMenuHeader}>
                    <Icon name="filter" size={24} color="#333" style={styles.btnIcon} />
                    <Heading2 text="Filter" />
                </View>
                <View style={styles.popoverMenuContent}>
                    <View style={styles.popoverSection}>
                        <Heading3 text="Marketing" color="#CBCBCB" />
                        <View style={{marginTop: 6}} />
                        <PickerField label="Pilih Marketing" listItem={pickerMarketingItem} />
                    </View>
                    <View style={{marginHorizontal: 6}} />
                    <View style={styles.popoverSection}>
                        <Heading3 text="Status" color="#CBCBCB" />
                        <View style={{marginTop: 6}} />
                        <PickerField label="Pilih Status" listItem={pickerStatusItem} />
                    </View>
                </View>
            </View>
        </Popover>
    )
}

const styles = StyleSheet.create({
    buttonFilter: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    btnIcon: {
        marginRight: 5
    },
    popover: {
        borderRadius: 10,
        width: '100%'
    }, 
    popoverMenu: {
        padding: 20
    },
    popoverMenuHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    popoverMenuContent: {
        flexDirection: 'row',
        marginTop: 25
    },
    popoverSection: {
        flex: 1,
        zIndex: 1000,
        zIndex: 9999
    }
})  

export default FilterMarketingNStatus