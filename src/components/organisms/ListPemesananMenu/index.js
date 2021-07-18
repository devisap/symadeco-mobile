import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import Collapsible from 'react-native-collapsible'
import Popover from 'react-native-popover-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Heading2 from '../../atoms/typography/Heading2'
import Heading3 from '../../atoms/typography/Heading3'
import Paragraph from '../../atoms/typography/Paragraph'
import { useNavigation } from '@react-navigation/core'
import { getFullDate } from '../../../utils/DateFunction'
import { useSelector } from 'react-redux'
import axios from 'axios'
import RNFetchBlob from 'rn-fetch-blob'

const ListPemesananMenu = props => {
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
    const [btnStyles, setBtnStyles]     = useState({})
    const [showPopover, setShowPopover] = useState(false)
    const navigation = useNavigation()
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)

    useEffect(() => {
        if(props.item['status'] == '0'){
            setTextStatus('Baru')
            setTextColor('#3CE500')
            setBtnStyles(styles.btnStateSuccess)
        }else if(props.item['status'] == '1'){
            setTextStatus('Cek Lokasi')
            setTextColor('#3CE500')
            setBtnStyles(styles.btnStateSuccess)
        }else if(props.item['status'] == '2'){
            setTextStatus('Booking')
            setTextColor('#FBBC05')
            setBtnStyles(styles.btnStateWarning)
        }else if(props.item['status'] == '3'){
            setTextStatus('Deal')
            setTextColor('#FBBC05')
            setBtnStyles(styles.btnStateWarning)
        }else if(props.item['status'] == '4'){
            setTextStatus('Dikirim')
            setTextColor('#FBBC05')
            setBtnStyles(styles.btnStateWarning)
        }else if(props.item['status'] == '5'){
            setTextStatus('Produksi')
            setTextColor('#FBBC05')
            setBtnStyles(styles.btnStateWarning)
        }else if(props.item['status'] == '6'){
            setTextStatus('Dibongkar')
            setTextColor('#E50000')
            setBtnStyles(styles.btnStateDanger)
        }else if(props.item['status'] == '7'){
            setTextStatus('Selesai')
            setTextColor('#0585FB')
            setBtnStyles(styles.btnStatePrimary)
        }
    }, [])

    const screenNavigate = (screen, id) => {
        setShowPopover(false)
        navigation.navigate(screen, { id })
    }

    const downloadDokumen = noPesan => {
        axios({
            url: `${gBaseUrl}/api/pemesanan/path/${noPesan}`,
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
                    alert('Berhasil mendownload dokumen pemesanan!')
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
                <Icon name="ios-layers" size={28} color="#333" />
                <View style={{marginLeft: 20}} />
                <Heading3 text={props.item['id']} />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <View style={btnStyles}>
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
                        <TouchableOpacity onPress={() => screenNavigate('PemesananEditScreen', props.item['id'])}>
                            <Icon name="ios-pencil" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                        <View style={{marginRight: 20}} />
                        <TouchableOpacity>
                            <Icon name="ios-bookmark" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                        <View style={{marginRight: 20}} />
                        <TouchableOpacity onPress={() => downloadDokumen(props.item['id'])}>
                            <Icon name="download" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                    </View>
                </Popover>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed} style={styles.itemDetailBox}>
            <View style={styles.itemDetailSection}>
                <Paragraph text="Klien" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['klien']} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Telepon" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['telp']} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Alamat" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['alamat']} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Tanggal Acara" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={getFullDate(new Date(props.item['tglAcara']))} />
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
    btnStatePrimary: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#C4E3FF",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    btnStateWarning: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#FFF0C3",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    btnStateSuccess: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#D4FFC4",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    btnStateDanger: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#FFC4C4",
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

export default ListPemesananMenu