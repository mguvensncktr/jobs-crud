import { Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const COLORS = {
    primary: "#1D212D",
    secondary: "#DB4914",
    white: "#fff",
    black: "#000000",
    lightGray: "#292D32",
    lightBlue: "#4E586E",
    gray: "#a5adbe",
    gray2: "#9f9fa1",
    green: "green",
    red: "red",
    border: "#292D32"
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radiusS: 10,
    padding: 24,
    radiusM: 15,
    radiusL: 20,
    // font sizes
    xxl: 30,
    xl: 24,
    lg: 20,
    md: 18,
    reg: 16,
    sm: 14,

    // app dimensions
    WIDTH,
    HEIGHT
};

const appTheme = { COLORS, SIZES };

export default appTheme;