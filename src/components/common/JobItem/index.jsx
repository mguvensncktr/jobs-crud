import { View, Text } from "react-native";
import React from "react";
import { getJobDate, getJobDateWithMomentJS } from "../../../utils/getJobDate";
import styles from "./styles";

const JobItem = ({ job }) => {
  return (
    <View style={styles.container}>
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
      <Text style={{ color: "#9f9fa1", textAlign: "right", marginTop: 5 }}>
        {getJobDate(job.job_start_date, job.job_end_date)}
      </Text>
    </View>
  );
};

export default JobItem;
