import React from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, StatusBar } from 'react-native';

const win = Dimensions.get('window');

class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1}}>
                <StatusBar barStyle="light-content" backgroundColor="#0F1C22" />
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.view_1_container}>
                            <View style={styles.view_1}>
                                <View style={styles.blackBox}/>
                                <View>
                                    <Text style={styles.text}>Name</Text>
                                </View>
                                <View style={styles.blackBox}/>
                            </View>
                        </View>
                        <View style={styles.view_2_container}>
                            <View style={styles.view_2}>
                                <Text style={styles.text}>Balance</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0F1C22"
    },
    card: {
        width: win.width/1.6,
        flexDirection: "column",
        borderRadius: 30,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    view_1_container: {
        backgroundColor: "#F4F5FB",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    view_1: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        height: win.width/3.6,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:"center"
    },
    view_2_container: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    view_2: {
        backgroundColor: "#F4F5FB",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        height: win.width/3.6,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    },
    blackBox: {
        width: 45,
        height: 45,
        borderRadius: 10,
        backgroundColor: "#000",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    }
})

export default App;
