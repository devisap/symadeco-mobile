import React, {useState,useEffect} from 'react'
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'
import IconFA from 'react-native-vector-icons/FontAwesome';

const SelectFilterField = (props) => {
    const [selectedItem, setSelectedItem] = useState('')
    const [items, setItems] = useState([
        {label: 'Aktif', value: '1'},
        {label: 'Non Aktif', value: '0'}
    ])

    useEffect(() => {
        if(props.items)
            setItems(props.items)
        if(props.selectedItem)
            setSelectedItem(props.selectedItem)
        
    }, [])

    useEffect(() => {
        if(props.onChangeValue)
            props.onChangeValue(props.inputType ,selectedItem)        
        }, [selectedItem])

    return (
        <View>
            <DropDownPicker 
                items={items}
                defaultValue={selectedItem}
                containerStyle={{height: 53, borderWidth:0, marginTop: -1}}
                style={{backgroundColor: "#FFFFFF", paddingLeft: 16, borderWidth: 1, borderColor: '#ebebeb', borderRadius: 15}}
                itemStyle={{
                    justifyContent: 'flex-start',
                    paddingLeft: 10,
                }}
                labelStyle={{fontFamily: "Causten-Medium", color:"#333", fontSize: 16}}
                dropDownStyle={{borderColor: '#ebebeb'}}
                onChangeItem={item => setSelectedItem(item.value)}
                zIndex={1}
                placeholder={props.label? props.label : "item"}
                placeholderStyle={{color: "#333"}}
                showArrow={false}
                // onOpen={() => setColorFocused('#48CAE4')}
                // onClose={() => setColorFocused('#DBDBDB')}
            />
            <View style={{position: "absolute", right: 16, top: 16}}>
                <IconFA name="chevron-down" size={16} color="#4a4a4a" />
            </View>
        </View>
    )
}

export default SelectFilterField