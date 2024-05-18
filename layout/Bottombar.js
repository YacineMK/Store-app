import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function Sidebar() {
    return (
        <View style={styles.container}>
            <FontAwesome5 name="home" size={24} color="black" style={styles.icon} />
            <FontAwesome5 name="user" size={24} color="black" style={styles.icon} />
            <FontAwesome5 name="settings" size={24} color="black" style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
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

export default Sidebar;
