import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

export default function WelcomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerWrapper}>
                <Image
                    style={styles.logo}
                    source={require("../img/logo.png")}
                    resizeMode="contain"
                />
                <Text style={styles.headerText}>BistroApp</Text>
            </View>

            <Text style={styles.subtitle}>
                Welcome to our Mediterranean Bistro
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDEFEE"
    },
    headerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#EE9972"
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 12,
        marginRight: 12,
        backgroundColor: "white"
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    },
    subtitle: {
        paddingHorizontal: 16,
        paddingTop: 16,
        fontSize: 16,
        color: "black"
    }
});
