// styles and components
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

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
    >
      <FontAwesome name="plus" size={24} color="#1D212D" />
    </TouchableOpacity>
  );
};

export default AddJobFAB;
