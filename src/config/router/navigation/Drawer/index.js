import React, { useState } from 'react'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import Logo from '../../../../assets/images/Logo.svg'
import {
    DashboardStack, DaftarKlienStack, AlurKeuanganStack,
    LaporanStack, DaftarPemesananStack, SKKStack,
    NotaPembayaranStack, NotaPengirimanStack, SOPStack,
    PemasukanStack, PengeluaranStack
} from '../Stack'
import { Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';

const Drawer = createDrawerNavigator()

const RouteDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Dashboard" component={DashboardStack} />
          <Drawer.Screen name="DaftarKlien" component={DaftarKlienStack} />
          <Drawer.Screen name="AlurKeuangan" component={AlurKeuanganStack} />
          <Drawer.Screen name="Laporan" component={LaporanStack} />
          <Drawer.Screen name="DaftarPemesanan" component={DaftarPemesananStack} />
          <Drawer.Screen name="SKK" component={SKKStack} />
          <Drawer.Screen name="NotaPembayaran" component={NotaPembayaranStack} />
          <Drawer.Screen name="NotaPengiriman" component={NotaPengirimanStack} />
          <Drawer.Screen name="SOP" component={SOPStack} />
          <Drawer.Screen name="Pemasukan" component={PemasukanStack} />
          <Drawer.Screen name="Pengeluaran" component={PengeluaranStack} />
        </Drawer.Navigator>
    )
}

const CustomDrawerContent = (props) => {
    const [currentDrawer, setCurrentDrawer] = useState('Dashboard')
    const [collapsed, setCollapsed] = useState(true)

    const drawerClick = (stack) => {
        props.navigation.navigate(stack);
        setCurrentDrawer(stack)
    }

    return (
        <DrawerContentScrollView {...props}>
            <View style={{marginTop: 30, marginBottom: 65, alignItems: 'center'}}>
                <Logo />
            </View>
            <DrawerItem 
            focused={currentDrawer == 'Dashboard'? true:false}
            label="Dashboard"
            activeTintColor="#7F43D6"
            inactiveTintColor="#cbcbcb"
            icon={({focused}) => <IconFA name="dashboard" size={18} color={focused? '#7F43D6' : '#cbcbcb'} /> } 
            labelStyle={{fontFamily: "Causten-SemiBold", fontSize: 20}} 
            onPress={() => drawerClick('Dashboard')} />
            
            <DrawerItem 
            focused={currentDrawer == 'DaftarKlien'? true:false}
            label="Daftar Klien"
            activeTintColor="#7F43D6"
            inactiveTintColor="#cbcbcb"
            icon={({focused}) => <IconFA5 name="user-friends" size={18} color={focused? '#7F43D6' : '#cbcbcb'} /> } 
            labelStyle={{fontFamily: "Causten-SemiBold", fontSize: 20}} 
            onPress={() => drawerClick('DaftarKlien')} />
            
            <DrawerItem 
            focused={currentDrawer == 'AlurKeuangan'? true:false}
            label="Alur Keuangan"
            activeTintColor="#7F43D6"
            inactiveTintColor="#cbcbcb"
            icon={({focused}) => <IconFA5 name="chart-line" size={18} color={focused? '#7F43D6' : '#cbcbcb'} /> } 
            labelStyle={{fontFamily: "Causten-SemiBold", fontSize: 20}} 
            onPress={() => drawerClick('AlurKeuangan')} />

            <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
                <View style={{flexDirection: 'row', paddingLeft: 20, marginVertical: 18}}>
                    <View style={{justifyContent: 'center'}}>
                        <IconFA5 name="clipboard-list" size={18} color="#cbcbcb" />
                    </View>
                    <View style={{marginLeft: 35, justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Causten-SemiBold', fontSize: 20, color: "#cbcbcb"}}>Proyek</Text>
                    </View>
                    <View style={{flex: 1 ,justifyContent: 'center', alignItems: 'flex-end', marginRight: 27}}>
                        {
                            collapsed == false? 
                            <IconFA name="caret-down" size={18} color="#cbcbcb" />
                            :
                            <IconFA name="caret-right" size={18} color="#cbcbcb" />
                        }
                    </View>
                </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed} align="center">
                <DrawerItem 
                    focused={currentDrawer == 'DaftarPemesanan'? true:false} 
                    label="Daftar Pemesanan" 
                    activeTintColor="#7F43D6"
                    inactiveTintColor="#cbcbcb"
                    labelStyle={{fontFamily: "Causten-Medium", fontSize: 18, marginLeft: 50}} 
                    onPress={() => drawerClick('DaftarPemesanan')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'SKK'? true:false} 
                    label="Surat Kontrak Kerja" 
                    activeTintColor="#7F43D6"
                    inactiveTintColor="#cbcbcb"
                    labelStyle={{fontFamily: "Causten-Medium", fontSize: 18, marginLeft: 50}} 
                    onPress={() => drawerClick('SKK')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'NotaPembayaran'? true:false} 
                    label="Nota Pembayaran" 
                    activeTintColor="#7F43D6"
                    inactiveTintColor="#cbcbcb"
                    labelStyle={{fontFamily: "Causten-Medium", fontSize: 18, marginLeft: 50}} 
                    onPress={() => drawerClick('NotaPembayaran')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'NotaPengiriman'? true:false} 
                    label="Nota Pengiriman" 
                    activeTintColor="#7F43D6"
                    inactiveTintColor="#cbcbcb"
                    labelStyle={{fontFamily: "Causten-Medium", fontSize: 18, marginLeft: 50}} 
                    onPress={() => drawerClick('NotaPengiriman')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'SOP'? true:false} 
                    label="SOP" 
                    activeTintColor="#7F43D6"
                    inactiveTintColor="#cbcbcb"
                    labelStyle={{fontFamily: "Causten-Medium", fontSize: 18, marginLeft: 50}} 
                    onPress={() => drawerClick('SOP')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'Pemasukan'? true:false} 
                    label="Pemasukan" 
                    activeTintColor="#7F43D6"
                    inactiveTintColor="#cbcbcb"
                    labelStyle={{fontFamily: "Causten-Medium", fontSize: 18, marginLeft: 50}} 
                    onPress={() => drawerClick('Pemasukan')} 
                />
                <DrawerItem 
                    focused={currentDrawer == 'Pengeluaran'? true:false} 
                    label="Pengeluaran" 
                    activeTintColor="#7F43D6"
                    inactiveTintColor="#cbcbcb"
                    labelStyle={{fontFamily: "Causten-Medium", fontSize: 18, marginLeft: 50}} 
                    onPress={() => drawerClick('YearlyReport')} 
                />
          </Collapsible>

            <DrawerItem 
            focused={currentDrawer == 'Laporan'? true:false}
            label="Laporan"
            activeTintColor="#7F43D6"
            inactiveTintColor="#cbcbcb"
            icon={({focused}) => <IconFA5 name="book" size={18} color={focused? '#7F43D6' : '#cbcbcb'} /> } 
            labelStyle={{fontFamily: "Causten-SemiBold", fontSize: 20}} 
            onPress={() => drawerClick('Laporan')} />

        </DrawerContentScrollView>
    )
}

export default RouteDrawer