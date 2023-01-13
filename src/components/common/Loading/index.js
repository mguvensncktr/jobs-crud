// components, styles
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";

const Loading = () => {
  return (
    <View style={styles.loadingIndicator} testID="loading">
      <ActivityIndicator size="large" color={"#DB4914"} />
    </View>
  );
};

export default Loading;
