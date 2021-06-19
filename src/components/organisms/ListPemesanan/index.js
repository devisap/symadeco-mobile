import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View, VirtualizedList } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import Heading2 from '../../atoms/typography/Heading2'
import Heading3 from '../../atoms/typography/Heading3'
import Paragraph from '../../atoms/typography/Paragraph'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { getFullDate } from '../../../utils/DateFunction'

const ListPemesanan = props => {
    const [list, setList]   = useState([])

    useEffect(() => {
        props.listSource && setList(props.listSource)
    })

    return (
        <FlatList 
            data={list}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return (
                    <View key={item.id}>
                        <ListDetail item={item} />
                    </View>
                )
            }}
        />
    )
}

const ListDetail = props => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [textStatus, setTextStatus]   = useState('')
    const [textColor, setTextColor]     = useState('')
    const [bgColor, setBgColor]         = useState('')

    useEffect(() => {
        switch (props.item['STATUS_PEMESANAN']) {
            case '0':
                setTextStatus('Baru')
                setTextColor('#3CE500')
                setBgColor('#D4FFC4')    
                break;
            case '1':
                setTextStatus('Cek Lokasi')
                setTextColor('#FBBC05')
                setBgColor('#FFF0C4')    
                break
            case '2':
                setTextStatus('Booking')
                setTextColor('#FBBC05')
                setBgColor('#FFF0C4') 
                break
            case '3':
                setTextStatus('Deal')
                setTextColor('#FBBC05')
                setBgColor('#FFF0C4')    
                break
            case '4':
                setTextStatus('Dikirim')
                setTextColor('#FBBC05')
                setBgColor('#FFF0C4')  
                break
            case '5':
                setTextStatus('Produksi')
                setTextColor('#FBBC05')
                setBgColor('#FFF0C4')  
                break
            case '6':
                setTextStatus('Dibongkar')
                setTextColor('#FBBC05')
                setBgColor('#FFF0C4')   
                break
            case '7':
                setTextStatus('Selesai')
                setTextColor('#0585FB')
                setBgColor('#C4E3FF')
                break 
        }
    }, [])


    return (
        <>
        <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.container}
            onPress={() => setIsCollapsed(!isCollapsed)}
        >
            <Icon name="ios-layers" size={28} color="#333" />
            <View style={{marginLeft: 20}} />
            <Heading3 text={props.item['NOMOR_PEMESANAN']} />
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <View style={styles.btnState(bgColor)}>
                    <Heading3 text={textStatus} color={textColor} />
                    {
                        isCollapsed?
                        <Icon name="chevron-forward" color={textColor} size={16} />
                        :
                        <Icon name="chevron-down" color={textColor} size={16} />
                    }
                </View>
            </View>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed} style={styles.itemDetailBox}>
            <View style={styles.itemDetailSection}>
                <Paragraph text="Marketing" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['NAMA_PENGGUNA']} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Alamat" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['ALAMAT_PEMESANAN']} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Tanggal Acara" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={getFullDate(new Date(props.item['TGLACARA_PEMESANAN']))} />
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
    btnState: bgColor => {
        return {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: bgColor,
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 30
        }
    },
    itemDetailBox: {
        backgroundColor: '#F3F4F5',
        borderRadius: 5,
        padding: 15
    },
    itemDetailSection: {
        flexDirection: 'row'
    }
})

export default ListPemesanan