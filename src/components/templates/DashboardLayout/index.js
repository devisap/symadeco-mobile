import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Heading3 from '../../atoms/typography/Heading3'
import Statistic from '../../../assets/images/DashboardGraphic.svg'
import Paragraph from '../../atoms/typography/Paragraph'
import SearchField from '../../atoms/forms/SearchField'
import Heading1 from '../../atoms/typography/Heading1'
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonState from '../../atoms/buttons/ButtonState'
import Collapsible from 'react-native-collapsible'
import ListItems from '../../molecules/ListItems'

const DashboardLayout = () => {
    return (
        <View style={{flex: 1, backgroundColor: "#F3F4F5"}}>
            <ScrollView>
                <View style={{paddingHorizontal: 30}}>
                    <View style={{flexDirection: 'row', marginTop: 40, backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 25, paddingVertical: 20, alignItems: 'center'}}>
                        <View style={{flex: 1}}>
                            <Heading3 text={"Jumlah Pesanan"} />
                            <Text style={{fontFamily: "Causten-Bold", fontSize: 48, color: '#333'}}>19</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Statistic />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={{flex: 1, backgroundColor: '#7F43D6', padding: 15, borderRadius: 10, marginRight: 20}}>
                            <Paragraph text={"Baru"} color={"#fff"} />
                            <Text style={{fontFamily: "Causten-Bold", fontSize: 48, color: '#fff'}}>15</Text>
                        </View>
                        <View style={{flex: 1, backgroundColor: '#fff', padding: 15, borderRadius: 10, marginRight: 20}}>
                            <Paragraph text={"Progress"} color={"#7F43D6"} />
                            <Text style={{fontFamily: "Causten-Bold", fontSize: 48, color: '#7F43D6'}}>2</Text>
                        </View>
                        <View style={{flex: 1, backgroundColor: '#fff', padding: 15, borderRadius: 10}}>
                            <Paragraph text={"Selesai"} color={"#7F43D6"} />
                            <Text style={{fontFamily: "Causten-Bold", fontSize: 48, color: '#7F43D6'}}>2</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <SearchField />
                    </View>
                </View>
                <View style={{marginTop: 20, backgroundColor: "#fff", paddingHorizontal: 30}}>
                    <ListItems label={"Daftar Pemesanan"} />
                </View>
                <View style={{marginTop: 20, backgroundColor: "#fff", paddingHorizontal: 30}}>
                    <ListItems label={"Daftar Klien"} />
                </View>
            </ScrollView>
        </View>
    )
}

export default DashboardLayout