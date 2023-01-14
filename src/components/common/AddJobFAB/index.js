// styles and components
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS, SIZES } from '../../../theme';


const AddJobFAB = ({ navigation }) => {

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
