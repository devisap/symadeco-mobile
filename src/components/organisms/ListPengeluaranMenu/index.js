import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import Collapsible from 'react-native-collapsible'
import Popover from 'react-native-popover-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Heading2 from '../../atoms/typography/Heading2'
import Heading3 from '../../atoms/typography/Heading3'
import Paragraph from '../../atoms/typography/Paragraph'

const ListPengeluaranMenu = () => {
    return (
        <FlatList 
            data={[
                {id: 2019081600000001, marketing: 'Marketing B', Alamat: 'Jl. Bantaran Barat', tglAcara: '20 Agustus 2021'},
                {id: 2019081600000003, marketing: 'Marketing B', Alamat: 'Jl. Bantaran Barat', tglAcara: '20 Agustus 2021'},
                {id: 2019081600000004, marketing: 'Marketing B', Alamat: 'Jl. Bantaran Barat', tglAcara: '20 Agustus 2021'},
                {id: 2019081600000005, marketing: 'Marketing B', Alamat: 'Jl. Bantaran Barat', tglAcara: '20 Agustus 2021'},
            ]}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return (
                    <ListDetail />
                )
            }}
        />
    )
}

const ListDetail = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    
    const navigation = useNavigation()

    return (
        <>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.container}
                onPress={() => setIsCollapsed(!isCollapsed)}
            >
                <Icon name="ios-arrow-up-circle" size={28} color="#333" />
                <View style={{marginLeft: 20}} />
                <Heading3 text="2019081600000001" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <View style={styles.btnState}>
                        <Heading3 text="Aktif" color="#0585FB" />
                        {
                            isCollapsed?
                            <Icon name="chevron-forward" color="#0585FB" size={16} />
                            :
                            <Icon name="chevron-down" color="#0585FB" size={16} />
                        }
                    </View>
                </View>
                <Popover
                    popoverStyle={styles.popover}
                    from={(
                        <TouchableOpacity style={styles.itemDetailMenu} >
                            <Icon name="ellipsis-vertical" size={16} color="#333" />
                        </TouchableOpacity>
                    )}
                >
                    <View style={styles.popoverMenu}>
                        <TouchableOpacity onPress={() => navigation.navigate('PengeluaranEditScreen')}>
                            <Icon name="ios-pencil" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                    </View>
                </Popover>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed} style={styles.itemDetailBox}>
            <View style={styles.itemDetailSection}>
                <Paragraph text="Tanggal Masuk" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="12 Maret 2021" />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Jumlah" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="Rp. 20000" />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Keterangan" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="Biaya buat kursi" />
                </View>
            </View>
        </Collapsible>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    btnState: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#C4E3FF",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    itemDetailBox: {
        backgroundColor: '#F3F4F5',
        borderRadius: 5,
        padding: 15
    },
    itemDetailSection: {
        flexDirection: 'row'
    },
    itemDetailMenu: {
        marginLeft: 20
    },
    popover: {
        borderRadius: 10
    },
    popoverMenu: {
        flexDirection: 'row',
        margin: 20
    }
})

export default ListPengeluaranMenu