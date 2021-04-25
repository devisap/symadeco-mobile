import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Heading1 from '../../atoms/typography/Heading1'
import Icon from 'react-native-vector-icons/FontAwesome'
import Heading3 from '../../atoms/typography/Heading3'
import ButtonState from '../../atoms/buttons/ButtonState'
import ButtonPrimary from '../../atoms/buttons/ButtonPrimary'
import Collapsible from 'react-native-collapsible'
import Paragraph from '../../atoms/typography/Paragraph'

const ListItemsFull = (props) => {
    return (
        <View style={{marginTop: 20}}>
            <View style={{marginTop: 10}}>
                <Item state={'success'} text={"Baru"} />
                <Item state={'info'} text={"Selesai"} />
                <Item state={'warning'} text={"Booking"} />
                <Item state={'danger'} text={"NonAktif"} />
            </View>
        </View>
    )
}

const Item = (props) => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setCollapsed(!collapsed)} style={{flexDirection: 'row', marginVertical: 20, alignItems: 'center'}}>
                <View style={{flex: 0.1}}>
                    <Icon name={"user"} size={24} color={"#333"} />
                </View>
                <View style={{flex: 0.6}}>
                    <Heading3 text={"2019081600000001"} />
                </View>
                <View style={{flex: 0.3}}>
                    <ButtonState isActive={!collapsed} state={props.state} text={props.text} />
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={collapsed}>
                <View style={{backgroundColor: '#F3F4F5', borderRadius: 5, paddingHorizontal: 15}}>
                    <View style={{marginVertical: 10, flexDirection: 'row'}}>
                        <View style={{flex: 0.5}}>
                            <Paragraph text={"Marketing"} color={"#cbcbcb"} />
                        </View>
                        <View style={{flex: 0.5,alignItems: 'flex-end'}}>
                            <Paragraph text={"MarketingB"}/>
                        </View>
                    </View>
                    <View style={{marginVertical: 10, flexDirection: 'row'}}>
                        <View style={{flex: 0.5}}>
                            <Paragraph text={"Alamat"} color={"#cbcbcb"} />
                        </View>
                        <View style={{flex: 0.5,alignItems: 'flex-end'}}>
                            <Paragraph text={"Jl. Gadang Gang IX"}/>
                        </View>
                    </View>
                    <View style={{marginVertical: 10, flexDirection: 'row'}}>
                        <View style={{flex: 0.5}}>
                            <Paragraph text={"Email"} color={"#cbcbcb"} />
                        </View>
                        <View style={{flex: 0.5,alignItems: 'flex-end'}}>
                            <Paragraph text={"ilham@gmail.com"}/>
                        </View>
                    </View>
                </View>
            </Collapsible>
        </View>
    )
}

export default ListItemsFull