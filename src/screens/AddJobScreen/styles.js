import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    goBackTouchable: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    goBackText: {
        color: "#DB4914",
        marginLeft: 5,
        fontSize: 20
    },
    newJobPostHeader: {
        color: "white",
        marginTop: 30,
        marginLeft: 10,
        fontSize: 24,
        fontWeight: "bold",
    },
    fieldContainer: {
        marginLeft: 10,
        marginTop: 10
    },
    titleHeader: {
        color: "white",
        fontSize: 20,
        fontWeight: "700"
    },
    titleInput: {
        backgroundColor: "white",
        height: 35,
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "600",
        paddingHorizontal: 10,
    },
    jobStartDateContainer: {
        marginLeft: 10,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    pickDateText: {
        color: "#DB4914",
        fontSize: 18,
        fontWeight: "500"
    },
    startAndEndDateText: {
        color: "white",
        marginLeft: 10,
        marginTop: 5,
        fontSize: 16
    },
    descriptionInput: {
        backgroundColor: "white",
        minHeight: 120,
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "600",
        paddingHorizontal: 10,
    },
    remainingCharactersText: {
        color: "#4E586E",
        position: "absolute",
        bottom: -10,
        right: 10,
    },
    submitButtonContainer: {
        width: 200,
        height: 50,
        borderRadius: 20,
        backgroundColor: "#DB4914",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
    },
    submitButtonText: { color: "white", fontSize: 20, fontWeight: "600" }
});

export default styles;