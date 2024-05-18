import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import SearchInput from './search';
import ProductCard from './cards';
import Navbar from '../../layout/Navbar';
import Bottombar from '../../layout/Bottombar';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [userName, setUserName] = useState(null);

    const getFakeUser = () => {
        return fetch('https://fakestoreapi.com/users?limit=1')
            .then(response => response.json())
            .then(data => {
                const username = data[0]?.username || "Amine";
                setUserName(username);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setUserName("Amine");
            });
    }

    useEffect(() => {
        getFakeUser();
    }, []);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.greeting}>Hi {userName || "Loading..."}</Text>
                    <Text style={styles.welcome}>Welcome to Katsu Store</Text>
                </View>
                <SearchInput />
                <FlatList
                    style={styles.flatList} // Added style
                    contentContainerStyle={styles.listContent}
                    data={products}
                    renderItem={({ item }) => (
                        <ProductCard
                            key={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title.substring(0, 19) + "..."}
                        />
                    )}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <Bottombar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 70,
    },
    header: {
        width: "100%",
        paddingHorizontal: "5%",
    },
    greeting: {
        textAlign: "left",
        fontSize: 48,
        fontWeight: "bold",
    },
    welcome: {
        textAlign: "left",
        fontSize: 20,
        color: "#9E9E9E",
        fontWeight: "500",
    },
    listContent: {
        marginVertical: 20,
        height: 300
    },
    flatList: {
        width: "100%",
    },
});
