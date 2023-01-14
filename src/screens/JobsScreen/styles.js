import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    emptyListContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    emptyListText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        backgroundColor: "#1D212D",
        paddingBottom: 10
    },
    headerContainer: {
        width: "100%",
        height: 100,
        backgroundColor: "#1D212D",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#292D32",
        marginTop: 20
    },
    headerText: {
        color: "white",
        marginLeft: 20,
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
    },
    flatListContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10
    }
})

export default styles;