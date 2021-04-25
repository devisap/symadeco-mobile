import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import ButtonIcon from '../../atoms/buttons/ButtonIcon'
import SearchField from '../../atoms/forms/SearchField'
import SelectFilterField from '../../atoms/forms/SelectFilterField'
import ListItemsFull from '../../molecules/ListItemsFull'

const DaftarKlienLayout = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#F3F4F5'}}>
            <ScrollView>
                <View style={{paddingHorizontal: 30, backgroundColor: '#F3F4F5'}}>
                    <View style={{marginTop: 40}}>
                        <SearchField />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={{flex: 0.5, marginRight: 20}}>
                            <SelectFilterField label={"Status"} />
                        </View>
                        <View style={{flex: 0.5}}>
                            <ButtonIcon />
                        </View>
                    </View>
                </View> 
                <View style={{flex: 1, backgroundColor: '#fff', marginTop: 20, paddingHorizontal: 30, zIndex: -1}}>
                    <ListItemsFull />
                </View>
            </ScrollView>
        </View>
    )
}

export default DaftarKlienLayout