import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import StatGraphic from '../../assets/images/DashboardGraphic.svg'
import Paragraph from '../../components/atoms/typography/Paragraph'
import Heading1 from '../../components/atoms/typography/Heading1'
import Heading3 from '../../components/atoms/typography/Heading3'
import SearchBox from '../../components/atoms/SearchBox'
import ListPemesanan from '../../components/organisms/ListPemesanan'
import ButtonSubmit from '../../components/atoms/buttons/ButtonSubmit'
import ListKlien from '../../components/organisms/ListKlien'
import axios from 'axios'
import { baseUrl } from '../../config/Recoil'
import { useRecoilValue } from 'recoil'
import SkeletonPlaceHolder from 'react-native-skeleton-placeholder'
const Dashboard = () => {
    const [stats, setStats] = useState({
        jmlPesanan: 0,
        baru: 0,
        onProgress: 0,
        selesai: 0
    })
    const [listSrcPemesanan, setListSrcPemesanan] = useState([])
    const [listSrcKlien, setListSrcKlien] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    const recBaseUrl = useRecoilValue(baseUrl)

    useEffect(() => {
        getApiStats()
        getApiListPemesanan()
        getApiListKlien()
    }, [])

    const getApiStats = () => {
        setIsFetched(false)
        axios({
            url: `${recBaseUrl}/api/dashboard/jumlah`,
            method: 'get'
        }).then(res => {
            setStats({
                jmlPesanan: res.data.data['jumlah pemesanan'],
                baru: res.data.data['jumlah pemesanan baru'],
                onProgress: res.data.data['jumlah pemesanan proses'],
                selesai: res.data.data['jumlah pemesanan selesai']
            })
        }).catch(err => {
            
        }).finally(() => {
            setIsFetched(true)
        })
    }

    const getApiListPemesanan = () => {
        axios({
            url: `${recBaseUrl}/api/dashboard/daftarpemesanan`,
            method: 'get'
        }).then(res => {
            setListSrcPemesanan(res.data.data)
        }).catch(err => {

        })
    }

    const getApiListKlien = () => {
        axios({
            url: `${recBaseUrl}/api/dashboard/daftarklien`,
            method: 'get',
        }).then(res => {
            setListSrcKlien(res.data.data)
            console.log(res.data.data);
        }).catch(err => {
            
        })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.statBox}>
                {
                    isFetched?
                    <>
                        <View style={styles.statAllBox}>
                            <View style={styles.statAllSection1}>
                                <Heading3 text="Jumlah Pesanan" />
                                <Text style={styles.statCount('#333')}>{ stats.jmlPesanan }</Text>
                            </View>
                            <View style={styles.statAllSection2}>
                                <StatGraphic />
                            </View>
                        </View>
                        <View style={styles.statDetailBox}>
                            <View style={styles.statDetailItem('#7F43D6')}>
                                <Paragraph text="Baru" color="#fff" />
                                <Text style={styles.statCount('#fff')}>{ stats.baru }</Text>
                            </View>
                            <View style={{marginHorizontal: 5}} />
                            <View style={styles.statDetailItem('#fff')}>
                                <Paragraph text="On Progress" color="#7F43D6" />
                                <Text style={styles.statCount('#7F43D6')}>{ stats.onProgress }</Text>
                            </View>
                            <View style={{marginHorizontal: 5}} />
                            <View style={styles.statDetailItem('#fff')}>
                                <Paragraph text="Selesai" color="#7F43D6" />
                                <Text style={styles.statCount('#7F43D6')}>{ stats.selesai }</Text>
                            </View>
                        </View>
                    </>
                    :
                    <SkeletonPlaceHolder>
                        <SkeletonPlaceHolder.Item width={"100%"} height={120} borderRadius={10} />
                        <SkeletonPlaceHolder.Item width={"100%"} height={100} borderRadius={10} marginTop={20} />
                    </SkeletonPlaceHolder>
                }
            </View>
            <View style={styles.content} nestedScrollEnabled={true}>
                <View style={styles.listPemesananBox}>
                    <Heading1 text="Daftar Pemesanan" color="#7F43D6" />
                    <View style={styles.listPemesananContent}>
                        <ListPemesanan listSource={listSrcPemesanan} />
                    </View>
                    <View style={styles.btnSubmitBox}>
                        <ButtonSubmit title="Selengkapnya" />
                    </View>
                </View>
                <View style={{marginTop: 20}} />
                <View style={styles.listPemesananBox}>
                    <Heading1 text="Daftar Klien" color="#7F43D6" />
                    <View style={styles.listPemesananContent}>
                        <ListKlien listSource={listSrcKlien} />
                    </View>
                <View style={styles.btnSubmitBox}>
                    <ButtonSubmit title="Selengkapnya" />
                </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F5'
    },
    statBox: {
        paddingHorizontal: 30,
        marginTop: 40
    },
    statAllBox: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingVertical: 10
    },
    statAllSection1: {
        flex: 0.5,
        justifyContent: 'center',
        paddingLeft: 25
    },
    statAllSection2: {
        flex: 0.5,
        alignItems: 'flex-end',
        paddingRight: 25
    },
    statCount: color => {
        return {
            fontFamily: 'Causten-Bold',
            color,
            fontSize: 48
        }
    },
    statDetailBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    statDetailItem: backgroundColor => {
        return{
            flex: 1,
            backgroundColor,
            borderRadius: 10,
            justifyContent: 'space-between',
            padding: 15
        }
    },
    content: {
        marginTop: 20
    },
    searchBox: {
        marginTop: 20
    },
    listPemesananBox: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingTop: 20
    },
    listPemesananContent: {
        marginTop: 30
    },
    btnSubmitBox: {
        marginVertical: 40
    }
})

export default Dashboard