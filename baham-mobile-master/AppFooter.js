import { StyleSheet, Text, View } from "react-native";

export default function AppFooter() {
    return (
        <View style={styles.container}>
            <Text sylte={styles.footer}>Copyright: Baham by project Dareecha (2023) - 
                <Text style={{fontStyle: 'italic'}}>Karachi Insitute of Economics & Technology</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        backgroundColor: 'fuchsia'
    },
    footer: {
        textAlign: 'auto',
    }
});
