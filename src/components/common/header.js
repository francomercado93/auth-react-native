import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {

    const { view, text } = styles;

    return (
        <View style={view}>
            <Text style={text}>{props.headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    text: {
        fontSize: 20
    }
});

export { Header};