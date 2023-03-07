import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.orange_dark
    },
    logo_container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input_container: {
        flex: 1,
    },
    button_container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.gray
    },
    inner_container: {
        flex: 2
    }
})