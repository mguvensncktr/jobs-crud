import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS, SIZES } from "../../theme";


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        paddingTop: getStatusBarHeight() + SIZES.radiusS,
        flex: 1,
    },
    subContainer: { flex: 1, paddingBottom: 45 },
    goBackButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    goBackText: { color: COLORS.secondary, marginLeft: 5, fontSize: SIZES.lg },
    fieldContainer: {
        marginHorizontal: 10,
        marginTop: 20,
    },
    fieldHeader: { color: COLORS.white, fontSize: SIZES.lg, fontWeight: "700" },
    descriptionText: { color: COLORS.white, fontSize: SIZES.reg, marginTop: 10 },
    applicationDateContainer: {
        marginHorizontal: 10,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    lastApplicationDateText: { color: COLORS.white, fontSize: SIZES.md, fontWeight: "700" },
    noApplicationsText: {
        color: COLORS.white,
        fontSize: SIZES.reg,
        fontWeight: "500",
        marginLeft: 5,
    }
});

export default styles;

