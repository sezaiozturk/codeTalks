import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

export default StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderColor: Colors.orange_dark,
        borderBottomColor: Colors.white
    },
    text: {
        fontSize: 18,
        color: Colors.white
    }
})