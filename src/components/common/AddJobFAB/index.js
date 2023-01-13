// styles and components
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";


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
      <FontAwesome name="plus" size={24} color="#1D212D" />
    </TouchableOpacity>
  );
};

export default AddJobFAB;
