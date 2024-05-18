import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import SearchInput from './search';
import ProductCard from './cards';

export default function Home() {
    const [products, setProducts] = useState([]);
    const name = "John"; // You can use a fake name from an API

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <View style={{ flex: 1, width: "100%", alignItems: "center", marginTop: 10 }}>
            <View >
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
            <View style={{ marginTop: 35, flex: 1 }}> {/* Set flex: 1 to make FlatList take remaining space */}
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <ProductCard
                            key={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title.substring(0, 20) + "..."}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}


