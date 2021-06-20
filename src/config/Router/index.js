import React, { useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    SplashScreen, Login, Dashboard,
    Klien, KlienAdd, KlienEdit,
    Pemesanan, PemesananAdd, SKK,
    SKKAdd, SKKEdit, Pemasukan, PemasukanAdd,
    PemasukanEdit, Pengeluaran, PengeluaranAdd,
    PengeluaranEdit, SOP, SOPAdd, SOPEdit,
    NPembayaran, NPembayaranAdd, NPembayaranSetBarang,
    NPembayaranEdit, NPembayaranEditSetBarang, NPengiriman,
    NPengirimanAdd, NPengirimanEdit, NPengirimanSetBarang, NPengirimanEditSetBarang
} from '../../pages'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Logo from '../../assets/images/Logo.svg'
import Collapsible from 'react-native-collapsible'

const Stack     = createStackNavigator()
const Drawer    = createDrawerNavigator() 

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="SplashScreen" 
                    component={SplashScreen} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="LoginScreen" 
                    component={Login} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="DashboardScreen" 
                    component={MyDrawer} 
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MyDrawer = ({ navigation }) => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomMyDrawer {...props} />}
            drawerContentOptions={{
                labelStyle: {
                    fontFamily: 'Causten-SemiBold',
                    fontSize: 14
                },
                activeTintColor: '#7F43D6'
            }}
        >
            <Drawer.Screen 
                name="DashboardScreen" 
                component={DashboardStack}
                options={{ 
                    drawerIcon: ({ focused }) => (
                        <Icon name="speedometer" size={20} style={{marginLeft: 10, marginRight: -10}} color={focused? '#7F43D6' : '#CBCBCB'} />
                    )
                }}
            />
            <Drawer.Screen 
                name="KlienScreen" 
                component={KlienStack}
                options={{ 
                    title: 'Daftar Klien',
                    headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'}
                }}
            />
            <Drawer.Screen 
                name="AlurKeuanganScreen" 
                component={KlienStack}
                options={{ 
                    title: 'Alur Keuangan',
                    headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'}
                }}
            />
            <Drawer.Screen name="PemesananScreen" component={PemesananStack} />
            <Drawer.Screen name="SKKScreen" component={SKKStack} />
            <Drawer.Screen name="PemasukanScreen" component={PemasukanStack} />
            <Drawer.Screen name="PengeluaranScreen" component={PengeluaranStack} />
            <Drawer.Screen name="SOPScreen" component={SOPStack} />
            <Drawer.Screen name="NPembayaranScreen" component={NPembayaranStack} />
            <Drawer.Screen name="NPengirimanScreen" component={NPengirimanStack} />
        </Drawer.Navigator>
    )
}

const CustomMyDrawer = props => {
    const [isCollapsed, setIsCollapsed]     = useState(true)
    const [currentScreen, setCurrentScreen] = useState("DashboardScreen")

    const screenNavigate = screen => {
        setCurrentScreen(screen)
        props.navigation.navigate(screen)
    }

    return (
        <DrawerContentScrollView {...props}>
            <View style={{alignItems: 'center', paddingVertical: 30}}>
                <Logo />
            </View>
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem
                focused={currentScreen == 'DashboardScreen' ? true : false}
                activeTintColor="#7F43D6"
                label="Dashboard"
                icon={({focused}) => (
                    <Icon name="speedometer" size={20} style={{marginLeft: 10, marginRight: -10}} color={focused? '#7F43D6' : '#CBCBCB'} />
                )}
                labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14 }}
                onPress={() => screenNavigate('DashboardScreen')}
            />
            <DrawerItem
                focused={currentScreen == 'KlienScreen' ? true : false}
                activeTintColor="#7F43D6"
                label="Klien"
                icon={({focused}) => (
                    <Icon name="ios-people" size={20} style={{marginLeft: 10, marginRight: -10}} color={focused? '#7F43D6' : '#CBCBCB'} />
                )}
                labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14 }}
                onPress={() => screenNavigate('KlienScreen')}
            />
            <DrawerItem
                focused={currentScreen == 'TesScreen' ? true : false}
                activeTintColor="#7F43D6"
                label="Alur Keuangan"
                icon={({focused}) => (
                    <Icon name="stats-chart" size={20} style={{marginLeft: 10, marginRight: -10}} color={focused? '#7F43D6' : '#CBCBCB'} />
                )}
                labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14 }}
                onPress={() => screenNavigate('KlienScreen')}
            />
            <View>
                <DrawerItem
                    label="Proyek"
                    icon={({focused}) => (
                        <Icon name="ios-layers" size={20} style={{marginLeft: 10, marginRight: -10}} color={focused? '#7F43D6' : '#CBCBCB'} />
                    )}
                    labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14 }}
                    onPress={() => setIsCollapsed(!isCollapsed)}
                />
                <Icon name={isCollapsed? "md-chevron-forward" : "md-chevron-down"} size={14} color="#cbcbcb" style={{position: 'absolute', alignSelf: 'flex-end', top: 17, right: 20}} />
            </View>
            <Collapsible collapsed={isCollapsed}>
                <DrawerItem
                    focused={currentScreen == 'PemesananScreen' ? true : false}
                    activeTintColor="#7F43D6"
                    label="Daftar Pemesanan"
                    labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14, paddingLeft: 52}}
                    onPress={() => screenNavigate('PemesananScreen')}
                />
                <DrawerItem
                    focused={currentScreen == 'SKKScreen' ? true : false}
                    activeTintColor="#7F43D6"
                    label="Surat Kontrak Kerja"
                    labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14, paddingLeft: 52}}
                    onPress={() => screenNavigate('SKKScreen')}
                />
                <DrawerItem
                    focused={currentScreen == 'NPembayaranScreen'? true : false}
                    activeTintColor="#7F43D6"
                    label="Nota Pembayaran"
                    labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14, paddingLeft: 52}}
                    onPress={() => screenNavigate('NPembayaranScreen')}
                />
                <DrawerItem
                    focused={currentScreen == 'NPengirimanScreen' ? true : false}
                    activeTintColor="#7F43D6"
                    label="Nota Pengiriman"
                    labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14, paddingLeft: 52}}
                    onPress={() => screenNavigate('NPengirimanScreen')}
                />
                <DrawerItem
                    focused={currentScreen == 'SOPScreen' ? true : false}
                    activeTintColor="#7F43D6"
                    label="SOP"
                    labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14, paddingLeft: 52}}
                    onPress={() => screenNavigate('SOPScreen')}
                />
                <DrawerItem
                    focused={currentScreen == 'PemasukanScreen'? true : false}
                    activeTintColor="#7F43D6"
                    label="Pemasukan"
                    labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14, paddingLeft: 52}}
                    onPress={() => screenNavigate('PemasukanScreen')}
                />
                <DrawerItem
                    focused={currentScreen == 'PengeluaranScreen'? true : false}
                    activeTintColor="#7F43D6"
                    label="Pengeluaran"
                    labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14, paddingLeft: 52}}
                    onPress={() => screenNavigate('PengeluaranScreen')}
                />
            </Collapsible>
            <DrawerItem
                focused={currentScreen == 'TesScreen' ? true : false}
                activeTintColor="#7F43D6"
                label="Laporan"
                icon={({focused}) => (
                    <Icon name="journal" size={20} style={{marginLeft: 10, marginRight: -10}} color={focused? '#7F43D6' : '#CBCBCB'} />
                )}
                labelStyle={{fontFamily: 'Causten-SemiBold', fontSize: 14 }}
                onPress={() => screenNavigate('KlienScreen')}
            />
        </DrawerContentScrollView>
    )
}

const DashboardStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'},
            }}
        >
            <Stack.Screen 
                name="DashboardScreen" 
                component={Dashboard}
                options={{
                    headerShown: true,
                    title: "Dashboard",
                    headerLeft: () => (
                        <HeaderNavigationDrawer onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <HeaderUserProfile />
                    )
                }}
             />
        </Stack.Navigator>
    )
}

const KlienStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'},
            }}
        >
            <Stack.Screen 
                name="KlienScreen" 
                component={Klien}
                options={{
                    headerShown: true,
                    title: "Klien",
                    headerLeft: () => (
                        <HeaderNavigationDrawer onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <HeaderUserProfile />
                    )
                }}
             />
            <Stack.Screen 
                name="KlienAddScreen" 
                component={KlienAdd}
                options={{
                    title: "Tambah Klien"
                }}

            />
            <Stack.Screen 
                name="KlienEditScreen" 
                component={KlienEdit}
                options={{
                    title: "Edit Klien"
                }}

            />

        </Stack.Navigator>
    )
}

const PemesananStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'},
            }}
        >
            <Stack.Screen 
                name="PemesananScreen" 
                component={Pemesanan}
                options={{
                    headerShown: true,
                    title: "Pemesanan",
                    headerLeft: () => (
                        <HeaderNavigationDrawer onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <HeaderUserProfile />
                    )
                }}
             />
             <Stack.Screen 
                name="PemesananAddScreen" 
                component={PemesananAdd} 
                options={{
                    title: 'Tambah Pemesanan'
                }}
            />
        </Stack.Navigator>
    )
}

const SKKStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'},
            }}
        >
            <Stack.Screen 
                name="SKKScreen" 
                component={SKK}
                options={{
                    headerShown: true,
                    title: "Surat Kontrak Kerja",
                    headerLeft: () => (
                        <HeaderNavigationDrawer onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <HeaderUserProfile />
                    )
                }}
             />
             <Stack.Screen 
                name="SKKAddScreen" 
                component={SKKAdd} 
                options={{
                    title: 'Tambah Surat Kontrak Kerja'
                }}
            />
             <Stack.Screen 
                name="SKKEditScreen" 
                component={SKKEdit} 
                options={{
                    title: 'Edit Surat Kontrak Kerja'
                }}
            />
        </Stack.Navigator>
    )
}

const PemasukanStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'},
            }}
        >
            <Stack.Screen 
                name="PemasukanScreen" 
                component={Pemasukan}
                options={{
                    headerShown: true,
                    title: "Pemasukan",
                    headerLeft: () => (
                        <HeaderNavigationDrawer onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <HeaderUserProfile />
                    )
                }}
             />
             <Stack.Screen 
                name="PemasukanAddScreen" 
                component={PemasukanAdd} 
                options={{
                    title: 'Tambah Pemasukan'
                }}
            />
             <Stack.Screen 
                name="PemasukanEditScreen" 
                component={PemasukanEdit} 
                options={{
                    title: 'Edit Pemasukan'
                }}
            />
        </Stack.Navigator>
    )
}
const PengeluaranStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'},
            }}
        >
            <Stack.Screen 
                name="PengeluaranScreen" 
                component={Pengeluaran}
                options={{
                    headerShown: true,
                    title: "Pengeluaran",
                    headerLeft: () => (
                        <HeaderNavigationDrawer onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <HeaderUserProfile />
                    )
                }}
             />
             <Stack.Screen 
                name="PengeluaranAddScreen" 
                component={PengeluaranAdd} 
                options={{
                    title: 'Tambah Pengeluaran'
                }}
            />
             <Stack.Screen 
                name="PengeluaranEditScreen" 
                component={PengeluaranEdit} 
                options={{
                    title: 'Edit Pengeluaran'
                }}
            />
        </Stack.Navigator>
    )
}

const SOPStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'},
            }}
        >
            <Stack.Screen 
                name="SOPScreen" 
                component={SOP}
                options={{
                    headerShown: true,
                    title: "SOP",
                    headerLeft: () => (
                        <HeaderNavigationDrawer onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <HeaderUserProfile />
                    )
                }}
             />
             <Stack.Screen 
                name="SOPAddScreen" 
                component={SOPAdd} 
                options={{
                    title: 'Tambah SOP'
                }}
            />
             <Stack.Screen 
                name="SOPEditScreen" 
                component={SOPEdit} 
                options={{
                    title: 'Edit SOP'
                }}
            />
        </Stack.Navigator>
    )
}

const NPembayaranStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'},
            }}
        >
            <Stack.Screen 
                name="NPembayaranScreen" 
                component={NPembayaran}
                options={{
                    headerShown: true,
                    title: "Nota Pembayaran",
                    headerLeft: () => (
                        <HeaderNavigationDrawer onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <HeaderUserProfile />
                    )
                }}
             />
            <Stack.Screen 
                name="NPembayaranAddScreen" 
                component={NPembayaranAdd} 
                options={{
                    title: 'Tambah Nota Pembayaran'
                }}
            />
            <Stack.Screen 
                name="NPembayaranEditScreen" 
                component={NPembayaranEdit} 
                options={{
                    title: 'Edit Nota Pembayaran'
                }}
            />
            <Stack.Screen 
                name="NPembayaranSetBarangScreen" 
                component={NPembayaranSetBarang} 
                options={{
                    title: 'Atur Barang'
                }}
            />
            <Stack.Screen 
                name="NPembayaranEditSetBarangScreen" 
                component={NPembayaranEditSetBarang} 
                options={{
                    title: 'Atur Ulang Barang'
                }}
            />
        </Stack.Navigator>
    )
}

const NPengirimanStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {fontFamily: 'Causten-Bold', color: '#333'},
            }}
        >
            <Stack.Screen 
                name="NPengirimanScreen" 
                component={NPengiriman}
                options={{
                    headerShown: true,
                    title: "Nota Pengiriman",
                    headerLeft: () => (
                        <HeaderNavigationDrawer onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <HeaderUserProfile />
                    )
                }}
             />
            <Stack.Screen 
                name="NPengirimanAddScreen" 
                component={NPengirimanAdd} 
                options={{
                    title: 'Tambah Nota Pengiriman'
                }}
            />
            <Stack.Screen 
                name="NPengirimanEditScreen" 
                component={NPengirimanEdit} 
                options={{
                    title: 'Edit Nota Pengiriman'
                }}
            />
            <Stack.Screen 
                name="NPengirimanSetBarangScreen" 
                component={NPengirimanSetBarang} 
                options={{
                    title: 'Atur Barang'
                }}
            />
            <Stack.Screen 
                name="NPengirimanEditSetBarangScreen" 
                component={NPengirimanEditSetBarang} 
                options={{
                    title: 'Atur Ulang Barang'
                }}
            />
        </Stack.Navigator>
    )
}

const HeaderUserProfile = () => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={{marginRight: 10}}>
            <Image source={require('../../assets/images/user.jpg')} style={{width: 35, height: 35, borderRadius: 100}} />
        </TouchableOpacity>
    )
}

const HeaderNavigationDrawer = props => {
    return (
        <TouchableOpacity style={{marginLeft: 10}} onPress={props.onPress}>
            <Icon name="ios-menu" size={24} color="#7F43D6" />
        </TouchableOpacity>
    )
}

export default Router