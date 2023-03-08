import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        margin: 10,
        borderRadius: 10
    },
    top_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    bottom_container: {
        paddingVertical: 10,
        marginHorizontal: 10
    },
    user_name: {
        fontSize: 18
    },
    date: {
        fontSize: 18
    },
    message: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})