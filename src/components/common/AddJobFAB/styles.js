import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../../theme';

const styles = StyleSheet.create({
    addJobFAB: {
        width: 60,
        height: 60,
        backgroundColor: COLORS.secondary,
        borderRadius: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 15,
        right: 10,
    },

})

export default styles;