// styles and components
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS, SIZES } from '../../../theme';

// hooks
import { useNavigation } from "@react-navigation/native";

const AddJobFAB = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AddJob");
  };

  return (
    <TouchableOpacity
      style={styles.addJobFAB}
      activeOpacity={0.4}
      onPress={onPress}
      testID="add-job-fab"
    >
      <FontAwesome name="plus" size={SIZES.xl} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default AddJobFAB;
