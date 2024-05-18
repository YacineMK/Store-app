import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import logo from "../assets/logo.svg";
import user from "../assets/avatar.png";
import { NavigationContainer } from '@react-navigation/native';

export default function Navbar() {
    return (
        <View style={Navbarstyles.nav}>
            <View style={Navbarstyles.logo}>
                <Image source={logo} style={Navbarstyles.imglogo} />
                <Text style={Navbarstyles.textlogo}>Katsu Store</Text>
            </View>
            <View style={Navbarstyles.iconsContainer}>
                <Image source={user} style={Navbarstyles.icon} />
            </View>
        </View>
    );
}

const Navbarstyles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        height: 100,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textlogo: {
        marginLeft: 8,
        fontSize: 24,
        fontWeight: "bold"
    },
    imglogo: {
        width: 24,
        height: 24,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 6,
        width: 32,
        height: 32,
    }
});
