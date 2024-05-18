import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, useWindowDimensions } from 'react-native'; // Import useWindowDimensions
import SearchInput from './search';
import ProductCard from './cards';
import Navbar from '../../layout/Navbar';
import Bottombar from '../../layout/Bottombar';


export default function Home() {
    const [products, setProducts] = useState([]);
    const [userName, setUserName] = useState(null); // Initialize userName with null

    const getFakeUser = () => {
        return fetch('https://fakestoreapi.com/users?limit=1')
            .then(response => response.json())
            .then(data => {
                const username = data[0]?.username || "Amine"; // Extract username from data
                setUserName(username); // Update userName state
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setUserName("Amine"); // Set a default username in case of error
            });
    }

    useEffect(() => {
        getFakeUser(); // Fetch fake user data on component mount
    }, []);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Navbar />
            <View style={{ flex: 1, width: "100%", alignItems: "center", marginTop: 10 }}>
                <View>
                    <Text style={{
                        textAlign: "left",
                        fontSize: 48,
                        fontWeight: "bold"
                    }}>Hi {userName || "Loading..."}</Text>
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
                        contentContainerStyle={{ paddingBottom: 120, flex: 1, marginVertical: 20 }}
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
            <Bottombar />
        </>
    );
}
