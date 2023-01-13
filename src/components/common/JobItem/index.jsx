import { View, Text, Pressable } from "react-native";
import React from "react";
import { getJobDate, getJobDateWithMomentJS } from "../../../utils/getJobDate";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const JobItem = ({ job }) => {
  const navigation = useNavigation();

  const handleJobItemPressed = () => {
    navigation.navigate("JobDetails", { job });
  };

  const getJobDateColor = () => {
    const isDateInvalid = getJobDate(
      job.job_start_date,
      job.job_end_date
    ).includes("kaldırıl");
    const isDateValid = getJobDate(
      job.job_start_date,
      job.job_end_date
    ).includes("gündür");
    return isDateInvalid ? "red" : isDateValid ? "green" : "#9f9fa1";
  };

  return (
    <Pressable style={styles.container} onPress={handleJobItemPressed}>
      <Text style={{ color: "#DB4914", fontSize: 16, fontWeight: "bold" }}>
        {job.job_title}
      </Text>
      <Text
        style={{
          color: "#a5adbe",
          fontSize: 14,
          fontWeight: "600",
          marginVertical: 5,
        }}
      >
        {job.job_owner}
      </Text>
      <Text
        style={{ color: "white", marginVertical: 5 }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {job.job_description}
      </Text>
      <Text
        style={{ color: getJobDateColor(), textAlign: "right", marginTop: 5 }}
      >
        {getJobDate(job.job_start_date, job.job_end_date)}
      </Text>
    </Pressable>
  );
};

export default JobItem;
