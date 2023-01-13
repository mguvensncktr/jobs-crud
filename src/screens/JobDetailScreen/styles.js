import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1D212D",
        paddingTop: getStatusBarHeight() + 10,
        flex: 1,
    },
    subContainer: { flex: 1, paddingBottom: 45 },
    goBackButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    goBackText: { color: "#DB4914", marginLeft: 5, fontSize: 20 },
    fieldContainer: {
        marginHorizontal: 10,
        marginTop: 20,
    },
    fieldHeader: { color: "white", fontSize: 20, fontWeight: "700" },
    descriptionText: { color: "white", fontSize: 16, marginTop: 10 },
    applicationDateContainer: {
        marginHorizontal: 10,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    lastApplicationDateText: { color: "white", fontSize: 18, fontWeight: "700" },
    noApplicationsText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 5,
    }
});

export default styles;

