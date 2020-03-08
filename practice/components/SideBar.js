import React from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export default Sidebar = props => (
    <ScrollView>
        <ImageBackground 
        source={require("../assets/background.jpg")} 
        style={{width: undefined, padding: 16, paddingTop: 48}} >
            <Image source={require("../assets/garden.png")} style={styles.logo} />
            <Text style={styles.name}>Nature Heroes</Text>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.connects}>Connect With US on Twitter</Text>
                <Icon name="logo-twitter" size={16} color="rgba(255, 255, 255, 0.8)" />
            </View>
        </ImageBackground>
        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
    name: {
        color: "#FFF",
        fontSize: 25,
        fontWeight: "800",
        marginVertical: 8
    },
    connects: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 13,
        marginRight: 4
    }
});