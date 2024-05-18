import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <Searchbar
            placeholder="Search"
            placeholderTextColor="black"
            style={{
                width: "90%",
                borderRadius: 12,
                backgroundColor: "#fff",
                color: "black",
                marginTop: 30,
                borderColor: "black",
                borderWidth: 1,
                borderStyle: "solid"
            }}
            inputStyle={{ color: "black" }}
            iconColor="black"
            rippleColor="black"
            onChangeText={setSearchQuery}
            value={searchQuery}
        />
    );
};

export default SearchInput;