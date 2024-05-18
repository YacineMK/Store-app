import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import SearchInput from './search';
import ProductCard from './cards';

export default function Home() {
    const [products, setProducts] = useState([]);
    const name = "jhon"; //u can use fake name from api
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
                }}>welcome in Katsu Store </Text>
            </View>
            <SearchInput />
            <View style={{ marginTop: 35 }}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            title={item.title}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}
