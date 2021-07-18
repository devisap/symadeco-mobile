import { useNavigation } from '@react-navigation/core'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import Collapsible from 'react-native-collapsible'
import Popover from 'react-native-popover-view'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import Heading2 from '../../atoms/typography/Heading2'
import Heading3 from '../../atoms/typography/Heading3'
import Paragraph from '../../atoms/typography/Paragraph'

const ListKlienMenu = props => {
    const [list, setList] = useState([])

    useEffect(() => {
        props.listSource && setList(props.listSource)
    })

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
    const gBaseUrl = useSelector(state => state.BaseUrlReducer.baseUrl)
    const navigation = useNavigation()
    
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
    

    const putApiStatus = () => {
        alert(gBaseUrl)
        // axios({

        // })
    }

    return (
        <>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.container}
                onPress={() => setIsCollapsed(!isCollapsed)}
            >
                <Icon name="person" size={28} color="#333" />
                <View style={{marginLeft: 20}} />
                <Heading3 text={props.item['NAMA_KLIEN']} />
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
                    popoverStyle={styles.popover}
                    isVisible={showPopover}
                    onRequestClose={() => setShowPopover(false)}
                    from={(
                        <TouchableOpacity style={styles.itemDetailMenu} onPress={() => setShowPopover(true)} >
                            <Icon name="ellipsis-vertical" size={16} color="#333" />
                        </TouchableOpacity>
                    )}
                >
                    <View style={styles.popoverMenu}>
                        <TouchableOpacity onPress={() => screenNavigate('KlienEditScreen', props.item['ID_KLIEN'])}>
                            <Icon name="ios-pencil" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                        <View style={{marginRight: 20}} />
                        <TouchableOpacity onPress={() => putApiStatus()}>
                            <Icon name="ios-bookmark" color="#7F43D6" size={16} />
                        </TouchableOpacity>
                    </View>
                </Popover>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed} style={styles.itemDetailBox}>
            <View style={styles.itemDetailSection}>
                <Paragraph text="Telepon" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['TELP_KLIEN']} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Alamat" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['ALAMAT_KLIEN']} />
                </View>
            </View>
            <View style={{marginTop: 15}} />
            <View style={styles.itemDetailSection}>
                <Paragraph text="Email" color="#CBCBCB" />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Paragraph text={props.item['EMAIL_KLIEN']} />
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

export default ListKlienMenu