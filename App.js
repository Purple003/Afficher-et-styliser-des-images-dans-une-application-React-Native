import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <AppHeader />
                <WelcomeScreen />
            </View>
            <View style={styles.footerContainer}>
                <AppFooter />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#EDEFEE',
    },
    container: {
        flex: 1,
        backgroundColor: '#EDEFEE',
    },
    footerContainer: {
        backgroundColor: '#EDEFEE',
    },
});
