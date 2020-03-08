
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity 
                        style={{alignItems: "flex-end", margin: 16}} 
                        onPress={this.props.navigation.openDrawer} >
                        <Icon name="bars" size={24} color="#161924" />
                    </TouchableOpacity>

                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
});