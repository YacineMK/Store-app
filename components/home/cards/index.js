import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const ProductCard = ({ title, price, rating, image }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>Rating: {rating.rate} <FontAwesome5 name="star" size={14} color="#d4af37" /></Text>
            </View>
            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 10,
        alignItems: "center",
        padding: 20,
        width: 200,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center",
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        color: "#888",
        fontSize: 12,
    },
    buyButton: {
        backgroundColor: "#3498db",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buyButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default ProductCard;
