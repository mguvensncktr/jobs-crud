import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 100,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radiusL,
        marginBottom: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: COLORS.lightBlue,
    },
    titleHeading: {
        color: COLORS.secondary,
        fontSize: SIZES.reg,
        fontWeight: "bold"
    },
    ownerHeading: {
        color: COLORS.gray,
        fontSize: SIZES.font,
        fontWeight: "600",
        marginVertical: 5,
    },
    description: { color: "white", marginVertical: 5 },
    date: { textAlign: "right", marginTop: 5 }
});

export default styles;