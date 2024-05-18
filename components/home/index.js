import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, useWindowDimensions } from 'react-native'; // Import useWindowDimensions
import SearchInput from './search';
import ProductCard from './cards';

export default function Home() {
    const [products, setProducts] = useState([]);
    const name = "John"; // You can use a fake name from an API
    const windowWidth = useWindowDimensions().width; // Use useWindowDimensions hook
    const numColumns = Math.floor(windowWidth / 180);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <View style={{ flex: 1, width: "100%", alignItems: "center", marginTop: 10 }}>
            <View>
                <Text style={{
                    textAlign: "left",
                    fontSize: 48,
                    fontWeight: "bold"
                }}>Hi {name}</Text>
                <Text style={{
                    textAlign: "left",
                    fontSize: 20,
                    color: "#9E9E9E",
                    fontWeight: "medium"
                }}>Welcome to Katsu Store</Text>
            </View>
            <SearchInput />
            <View style={{ marginTop: 35, width: '90%', flex: 1 }}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 70 }}
                    data={products}
                    renderItem={({ item }) => (
                        <ProductCard
                            key={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title.substring(0, 20) + "..."}
                        />
                    )}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}
