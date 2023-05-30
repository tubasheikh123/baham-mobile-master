import { StyleSheet, Text, View } from "react-native";

export default function AppHeader({}) {
    return(
        <View>
            <Text style={styles.header}>
                Baham (باہم)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'gold'
    }
});
