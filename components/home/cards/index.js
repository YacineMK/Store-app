import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({ title, price, image }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <View style={styles.bottomRow}>
                <Text style={styles.price}>${price}</Text>
                <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 10,
        alignItems: "center",
        padding: 20,
        maxWidth: 300,
        borderColor: "#E0E0E0",
        borderWidth: 1
    },
    image: {
        width: 140,
        height: 100,
        resizeMode: "cover",
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5,
    },
    bottomRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    price: {
        fontSize: 12,
        color: "#888",
    },
    buyButton: {
        backgroundColor: "#3498db",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buyButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
});

export default ProductCard;