import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import Collapsible from 'react-native-collapsible'
import Popover from 'react-native-popover-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Heading2 from '../../atoms/typography/Heading2'
import Heading3 from '../../atoms/typography/Heading3'
import Paragraph from '../../atoms/typography/Paragraph'
import { getFullDate } from '../../../utils/DateFunction'
import { useSelector } from 'react-redux'
import axios from 'axios'
import RNFetchBlob from 'rn-fetch-blob'
import numberWithPoints from '../../../utils/NumberPoints'

const ListSKKMenu = props => {
    const [list, setList] = useState([])

    useEffect(() => {
        props.listSource && setList(props.listSource)
    }, [])

    return (
        <FlatList 
            data={list}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => {
                return (
                    <ListDetail item={item} />
                )
            }}
        />
    )
}

const ListDetail = props => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [textStatus, setTextStatus]   = useState('')
    const [textColor, setTextColor]     = useState('#333')
    const [showPopover, setShowPopover] = useState(false)
    const navigation = useNavigation()
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        if(props.item['deleted_at']){
            setTextStatus('Non Aktif')
            setTextColor('#E50000')
        }else{
            setTextStatus('Aktif')
            setTextColor('#0585FB')
        }
    }, [])

    const screenNavigate = (screen, id) => {
        setShowPopover(false)
        navigation.navigate(screen, { id })
    }

    const downloadDokumen = noPesan => {
        setShowPopover(false)
        axios({
            url: `${gBaseUrl}/api/skk/path/${noPesan}`,
            method: 'get'
        }).then(res => {
            const fileName = res.data.data.link.split('/')[6]
                const android = RNFetchBlob.android
                let dirs = RNFetchBlob.fs.dirs
                RNFetchBlob.config({
                    fileCache : true,
                    // android only options, these options be a no-op on IOS
                    addAndroidDownloads : {
                        useDownloadManager : true,
                        title : fileName,
                        description : `${fileName} berhasil terdownload`,
                        mime : 'application/pdf',
                        mediaScannable : true,
                        notification : true,
                        path : `${dirs.DownloadDir}/${fileName}`
                    },
                  })
                  .fetch('GET', `${res.data.data.link}`)
                  .then(res => {
                    alert('Berhasil mendownload dokumen surat kontrak kerja!')
                  })
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.container}
                onPress={() => setIsCollapsed(!isCollapsed)}
            >
                <Icon name="md-newspaper" size={28} color="#333" />
                <View style={{marginLeft: 20}} />
                <Heading3 text={props.item['NOMOR_SKK']} />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <View style={textStatus == 'Aktif'? styles.btnStateActive : styles.btnStateNonActive}>
                        <Heading3 text={textStatus} color={textColor} />
                        {
                            isCollapsed?
                            <Icon name="chevron-forward" color={textColor} size={16} />
                            :
                            <Icon name="chevron-down" color={textColor} size={16} />
                        }
                    </View>
                </View>
                <Popover
                    isVisible={showPopover}
                    popoverStyle={styles.popover}
                    from={(
                        <TouchableOpacity style={styles.itemDetailMenu} onPress={() => setShowPopover(true)} >
                            <Icon name="ellipsis-vertical" size={16} color="#333" />
                        </TouchableOpacity>
                    )}
                    onRequestClose={() => setShowPopover(false)}
                >
                    <View style={styles.popoverMenu}>
                        <TouchableOpacity onPress={() => screenNavigate('SKKEditScreen', props.item['NOMOR_SKK'])}>
                            <Icon name="ios-pencil" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                        <View style={{marginRight: 20}} />
                        <TouchableOpacity onPress={() => downloadDokumen(props.item['NOMOR_SKK'])}>
                            <Icon name="download" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                    </View>
                </Popover>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed} style={styles.itemDetailBox}>
            <View style={styles.itemDetailSection}>
                <Paragraph text="Klien" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['NAMA_KLIEN']} />
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
                <Paragraph text="Biaya" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={`Rp. ${props.item['BIAYA_PEMESANAN']? numberWithPoints(props.item['BIAYA_PEMESANAN']) : 0}`} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Tanggal Acara" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={getFullDate(new Date(props.item['TGLACARA_PEMESANAN']))} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Tanggal Selesai" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={getFullDate(new Date(props.item['TGLSELESAI_PEMESANAN']))} />
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
    btnStateActive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C4E3FF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    btnStateNonActive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFC4C4',
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

export default ListSKKMenu