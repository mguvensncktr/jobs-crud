import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";

const styles = StyleSheet.create({
    goBackTouchable: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    goBackText: {
        color: COLORS.secondary,
        marginLeft: 5,
        fontSize: SIZES.lg
    },
    newJobPostHeader: {
        color: COLORS.white,
        marginTop: 30,
        marginLeft: 10,
        fontSize: COLORS.xl,
        fontWeight: "bold",
    },
    fieldContainer: {
        marginLeft: 10,
        marginTop: 10
    },
    titleHeader: {
        color: COLORS.white,
        fontSize: COLORS.xl,
        fontWeight: "700"
    },
    titleInput: {
        backgroundColor: COLORS.white,
        height: 35,
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 10,
        fontSize: SIZES.reg,
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
        color: COLORS.secondary,
        fontSize: SIZES.md,
        fontWeight: "500"
    },
    startAndEndDateText: {
        color: COLORS.white,
        marginLeft: 10,
        marginTop: 5,
        fontSize: SIZES.reg
    },
    descriptionInput: {
        backgroundColor: COLORS.white,
        minHeight: 120,
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 10,
        fontSize: SIZES.reg,
        fontWeight: "600",
        paddingHorizontal: 10,
    },
    remainingCharactersText: {
        color: COLORS.lightBlue,
        position: "absolute",
        bottom: -10,
        right: 10,
    },
    submitButtonContainer: {
        width: 200,
        height: 50,
        borderRadius: SIZES.radiusL,
        backgroundColor: COLORS.secondary,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
    },
    submitButtonText: { color: COLORS.white, fontSize: SIZES.lg, fontWeight: "600" }
});

export default styles;