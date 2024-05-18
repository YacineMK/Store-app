import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Bottombar() {

    return (
        <View style={styles.container}>
            <FontAwesome5 name="home" size={24} color="black" style={styles.icon} />
            <FontAwesome name="user" size={24} color="black" style={styles.icon} />
            <Entypo name="info-with-circle" size={24} color="black" style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom:0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "10%",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
        height: 70,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },
    icon: {

    },
});

export default Bottombar;
