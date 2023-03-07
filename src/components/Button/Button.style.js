import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors/Colors";

const base_style = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default {
    primary: StyleSheet.create({
        container: {
            ...base_style.container,
            backgroundColor: Colors.orange
        },
        title: {
            ...base_style.title,
            color: Colors.white

        }
    }),
    secondary: StyleSheet.create({
        container: {
            ...base_style.container,
            borderWidth: 2,
            borderColor: Colors.orange_dark,
            backgroundColor: Colors.white
        },
        title: {
            ...base_style.title,
            color: Colors.orange
        }
    })
}