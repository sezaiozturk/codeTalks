import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

const dimensions = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        backgroundColor: Colors.orange_dark,
        width: dimensions.width / 6,
        height: dimensions.height / 13,
        borderRadius: dimensions.height / 6.5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15,
        bottom: 15
    },
    icon: {
        fontSize: 20,
        color: Colors.white
    }
})