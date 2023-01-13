import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 100,
        backgroundColor: '#1D212D',
        borderRadius: 20,
        marginBottom: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#4E586E',
    },
    titleHeading: {
        color: "#DB4914",
        fontSize: 16,
        fontWeight: "bold"
    },
    ownerHeading: {
        color: "#a5adbe",
        fontSize: 14,
        fontWeight: "600",
        marginVertical: 5,
    },
    description: { color: "white", marginVertical: 5 },
    date: { textAlign: "right", marginTop: 5 }
});

export default styles;