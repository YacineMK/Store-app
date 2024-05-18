import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchInput = () => {
    const windowWidth = Dimensions.get("window").width;

    return (
        <View style={[styles.container, { width: windowWidth * 0.82 }]}>
            <TextInput
                style={[styles.input, { fontSize: windowWidth * 0.045 }]}
                placeholder="Search here"
                placeholderTextColor="#000"
            />
            <Ionicons name="search" size={windowWidth * 0.06} color="#888" style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#000"
    },
    icon: {
        marginRight: 3,
        color: "#000"
    },
    input: {
        flex: 1,
        height: "auto",
        color: "#000",
    },
});

export default SearchInput;
