import React, { useState } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Popover from 'react-native-popover-view'
import { color, set } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'
import { getFullDate } from '../../../../utils/DateFunction'
import DropdownField from '../../forms/DropdownField'
import PickerField from '../../forms/PickerField'
import Heading2 from '../../typography/Heading2'
import Heading3 from '../../typography/Heading3'
import DateTimePicker from '@react-native-community/datetimepicker'

const FilterDateRange = () => {
    const [dateStart, setDateStart]               = useState(new Date())
    const [modeStart, setModeStart]               = useState('date')
    const [showStart, setShowStart]               = useState(false)
    const [dateStringStart, setDateStringStart]   = useState('')
    
    const [dateEnd, setDateEnd]               = useState(new Date())
    const [modeEnd, setModeEnd]               = useState('date')
    const [showEnd, setShowEnd]               = useState(false)
    const [dateStringEnd, setDateStringEnd]   = useState('')

    const onChangeStart = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShowStart(Platform.OS === 'ios')
        setDateStart(currentDate)
        setDateStringStart(getFullDate(currentDate))
    }

    const showModeStart = currentMode => {
        setShowStart(true)
        setModeStart(currentMode)
    }

    const showDatepickerStart = () => {
        showModeStart('date')
    }


    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShowEnd(Platform.OS === 'ios')
        setDateEnd(currentDate)
        setDateStringEnd(getFullDate(currentDate))
    }

    const showModeEnd = currentMode => {
        setShowEnd(true)
        setModeEnd(currentMode)
    }

    const showDatepickerEnd = () => {
        showModeEnd('date')
    }

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
                        <Heading3 text="Tanggal Mulai" color="#CBCBCB" />
                        <View style={{marginTop: 6}} />
                        <TouchableOpacity activeOpacity={0.8} onPress={() => showDatepickerStart()}>
                            <Text style={styles.filter}>{ dateStringStart? dateStringStart : 'Pilih Tanggal' }</Text>
                        </TouchableOpacity>
                        {showStart && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={dateStart}
                            mode={modeStart}
                            is24Hour={true}
                            display="default"
                            onChange={onChangeStart}
                            />
                        )}
                    </View>
                    <View style={{marginHorizontal: 8}} />
                    <View style={styles.popoverSection}>
                        <Heading3 text="Tanggal Selesai" color="#CBCBCB" />
                        <View style={{marginTop: 6}} />
                        <TouchableOpacity activeOpacity={0.8} onPress={() => showDatepickerEnd()}>
                            <Text style={styles.filter}>{ dateStringEnd? dateStringEnd : 'Pilih Tanggal' }</Text>
                        </TouchableOpacity>
                        {showEnd && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={dateEnd}
                            mode={modeEnd}
                            is24Hour={true}
                            display="default"
                            onChange={onChangeEnd}
                            />
                        )}
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
    },
    filter: {
        fontFamily: 'Causten-Medium',
        fontSize: 14,
        color: '#333',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#cbcbcb',
        borderRadius: 5,
        paddingVertical: 10,
        paddingLeft: 10
    }
})  

export default FilterDateRange