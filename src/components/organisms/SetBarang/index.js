import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import NumberField from '../../../components/atoms/forms/NumberField'
import Icon from 'react-native-vector-icons/Ionicons'

const SetBarang = props => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.label}>{props.label? props.label : 'Label'}</Text>
                <View style={{flex: 1}}>
                    <Icon name="trash" color="#ff5252" size={16} style={styles.iconDelete} onPress={() => alert('ilham ganteng')} />
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.contentSection}>
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
                    />
                </View>
                <View style={{marginRight: 20}} />
                <View style={{flex: 0.3}}>
                    <Text style={styles.contentLabel}>Stok</Text>
                    <View style={styles.contentCount}>
                        <Text style={styles.contentCountText}>{ props.count? props.count : 0 }</Text>
                    </View>
                </View>
                <View style={{marginRight: 20}} />
                <View style={styles.contentSection}>
                    <TextInput 
                        placeholder={'Jml Barang'}
                        placeholderTextColor="#CBCBCB"
                        style={styles.inputField}
                        keyboardType="number-pad"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row'
    },
    label: {
        fontFamily: 'Causten-SemiBold',
        color: "#7F43D6",
        fontSize: 18,
    },
    iconDelete: {
        flex: 1,
        alignSelf: 'flex-end',
        marginRight: 20
    },
    dropdown: {
        marginTop: 10
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentSection: {
        flex: 1
    },
    contentLabel: {
        fontFamily: 'Causten-Medium',
        fontSize: 14,
        color: '#7F43D6',
        alignSelf: 'center',
        marginBottom: -5
    },
    contentCount: {
        backgroundColor: '#7F43D6',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginTop: 10
    },
    contentCountText: {
        fontFamily: 'Causten-Medium',
        fontSize: 18,
        color: '#fff'
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

export default SetBarang