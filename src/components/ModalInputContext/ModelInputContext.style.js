import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

export default StyleSheet.create({
    modal_container: {
        justifyContent: 'flex-end',
        margin: 6,
        marginBottom: 0
    },
    container: {
        backgroundColor: Colors.white,
        height: Dimensions.get('window').height / 3,
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    top_container: {
        flex: 2
    },
    bottom_container: {
        flex: 1
    },
    input: {
        fontSize: 20,
        margin: 10
    }
})