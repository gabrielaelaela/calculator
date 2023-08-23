import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from "react";

export default function App() {
    const [res, setRes] = useState("");
    const [firstValue, setFirstValue] = useState("");
    const [secondValue, setSecondValue] = useState("");

    const plus = () => {
        setRes(Number(firstValue) + Number(secondValue));
    }

    const minus = () => {
        setRes(Number(firstValue) - Number(secondValue));
    }

    return (
        <View style={styles.container}>
            <Text>Result: {res}</Text>
            <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                   onChangeText={firstValue => setFirstValue(firstValue)} value={firstValue} />
            <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                   onChangeText={secondValue => setSecondValue(secondValue)} value={secondValue} />
            <View style={styles.flexContainer}>
                <Button onPress={plus} title="+" />
                <Button onPress={minus} title="-" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        height: 5
    }
});
