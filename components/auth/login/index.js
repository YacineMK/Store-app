import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';

export default function Login({ navigation }) {
    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={{
                textAlign: "left",
                fontSize: 32,
                fontWeight: "bold",
                marginBottom: 25,
            }} >Welcome to Katsu Shop</Text>
            <TextInput
                placeholder='password'
                value={text}
                onChangeText={setText}
                textColor='black'
                inputStyle={{ color: "black", borderWidth: 0, borderbottom: 0 }}
                style={styles.input}
            />
            <TextInput
                placeholder='password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                textColor='black'
                inputStyle={{ color: "black", borderWidth: 0 }}
                right={<TextInput.Icon icon="eye" />}
                style={styles.input}
            />
            <Button mode="contained" onPress={() => navigation.navigate('Home')} style={{ width: "80%", color: "#fff", backgroundColor: "black" }}>
                Submit
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginBottom: 16,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 24,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        height: 40,
        borderWidth: 1,
        width: '80%'
    }
});
