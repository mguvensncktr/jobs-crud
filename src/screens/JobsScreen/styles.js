import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../theme';

const styles = StyleSheet.create({
    emptyListContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    emptyListText: {
        color: COLORS.white,
        fontSize: SIZES.xl,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingBottom: 10
    },
    headerContainer: {
        width: "100%",
        height: 100,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        marginTop: 20
    },
    headerText: {
        color: COLORS.white,
        marginLeft: 20,
        fontSize: SIZES.xl,
        fontWeight: "bold",
        marginTop: 10,
    },
    flatListContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10
    },
    searchInput: {
        height: 40,
        borderColor: COLORS.lightBlue,
        borderWidth: 1,
        padding: 10,
        margin: 15,
        borderRadius: SIZES.radiusS,
        color: COLORS.white
    }
})

export default styles;