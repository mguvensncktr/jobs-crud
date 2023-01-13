import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const AddJobFAB = () => {
  return (
    <TouchableOpacity style={styles.addJobFAB} activeOpacity={0.4}>
      <FontAwesome name="plus" size={24} color="#1D212D" />
    </TouchableOpacity>
  );
};

export default AddJobFAB;
