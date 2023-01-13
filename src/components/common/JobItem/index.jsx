// components, styles
import { Text, Pressable } from "react-native";
import styles from "./styles";

// helper functions
import { getJobDate, getJobDateWithMomentJS } from "../../../utils/getJobDate";

// hooks
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
      <Text style={styles.titleHeading}>{job.job_title}</Text>
      <Text style={styles.ownerHeading}>{job.job_owner}</Text>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
        {job.job_description}
      </Text>
      <Text style={[{ color: getJobDateColor() }, styles.date]}>
        {getJobDate(job.job_start_date, job.job_end_date)}
      </Text>
    </Pressable>
  );
};

export default JobItem;
