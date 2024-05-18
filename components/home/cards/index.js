import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = ({ category, description, id, image, price, rating, title }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>${price}</Text>
                <Text style={styles.rating}>Rating: {rating.rate} ({rating.count} reviews)</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 10,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: "cover",
    },
    content: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    category: {
        color: "#888",
        marginBottom: 5,
    },
    description: {
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    rating: {
        color: "#888",
    },
});

export default ProductCard;
