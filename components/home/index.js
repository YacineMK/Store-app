import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import SearchInput from './search';
import ProductCard from './cards';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <View style={{ flex: 1, width: "100%", alignItems: "center", marginTop: 10 }}>
            <SearchInput />
            <View style={{marginTop:35}}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductCard
                        key={item.id}
                        category={item.category}
                        description={item.description}
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
