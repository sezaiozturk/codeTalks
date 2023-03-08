import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.orange,
        flex: 1
    },
    head_container: {
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dotted',
        borderColor: Colors.white,
        margin: 10,
        padding: 15
    },
    head: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: Colors.white
    }
})