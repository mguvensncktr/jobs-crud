// components, styles
import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../../../theme";
import styles from "./styles";

const Loading = () => {
  return (
    <View style={styles.loadingIndicator} testID="loading">
      <ActivityIndicator size="large" color={COLORS.secondary} testID="activity-indicator" />
    </View>
  );
};

export default Loading;
