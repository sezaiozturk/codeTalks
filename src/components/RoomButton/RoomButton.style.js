import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

const dimensions = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.gray,
        borderRadius: 10,
        width: '48%',
        marginHorizontal: '1%',
        marginVertical: '1%',
        height: dimensions.height / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '400',
        color: Colors.orange_dark
    }
})