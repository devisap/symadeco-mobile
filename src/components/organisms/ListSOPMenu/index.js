import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Collapsible from 'react-native-collapsible'
import Popover from 'react-native-popover-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Heading2 from '../../atoms/typography/Heading2'
import Heading3 from '../../atoms/typography/Heading3'
import Paragraph from '../../atoms/typography/Paragraph'

const ListSOPMenu = () => {
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
    const [showPopover, setShowPopover] = useState(false)
    
    const navigation = useNavigation()

    const screenNavigate = screen => {
        setShowPopover(false)
        navigation.navigate(screen)
    }

    return (
        <>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.container}
                onPress={() => setIsCollapsed(!isCollapsed)}
            >
                <Icon name="map" size={28} color="#333" />
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
                    onRequestClose={() => setShowPopover(false)}
                    isVisible={showPopover}
                    popoverStyle={styles.popover}
                    from={(
                        <TouchableOpacity onPress={() => setShowPopover(true)} style={styles.itemDetailMenu} >
                            <Icon name="ellipsis-vertical" size={16} color="#333" />
                        </TouchableOpacity>
                    )}
                >
                    <View style={styles.popoverMenu}>
                        <TouchableOpacity onPress={() => screenNavigate('SOPEditScreen')}>
                            <Icon name="ios-pencil" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                        <View style={{marginRight: 20}} />
                        <TouchableOpacity>
                            <Icon name="print" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                    </View>
                </Popover>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed} style={styles.itemDetailBox}>
            <View style={styles.itemDetailSection}>
                <Paragraph text="Klien" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="089794875323" />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Alamat" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="Jl. Bantaran Barat" />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Biaya" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="Rp. 200000" />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Tanggal Acara" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text="20 Agustus 2021" />
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

export default ListSOPMenu