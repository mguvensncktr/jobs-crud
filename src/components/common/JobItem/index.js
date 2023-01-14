// components, styles
import { Text, Pressable } from "react-native";
import styles from "./styles";
import { COLORS } from "../../../theme";

// helper functions
import { getJobDate, getJobDateWithMomentJS } from "../../../utils/getJobDate";

const JobItem = ({ job, navigation }) => {

  const handleJobItemPressed = () => {
    navigation.navigate("JobDetails", { job });
  };

  const getJobDateColor = () => {
    const isDateInvalid = getJobDate(
      job?.job_start_date,
      job?.job_end_date
    ).includes("kaldırıl");
    const isDateValid = getJobDate(
      job?.job_start_date,
      job?.job_end_date
    ).includes("gündür");
    return isDateInvalid ? COLORS.red : isDateValid ? COLORS.green : COLORS.gray2;
  };

  return (
    <Pressable style={styles.container} onPress={handleJobItemPressed} testID="pressable-container">
      <Text style={styles.titleHeading}>{job?.job_title}</Text>
      <Text style={styles.ownerHeading}>{job?.job_owner}</Text>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
        {job?.job_description}
      </Text>
      <Text style={[{ color: getJobDateColor() }, styles.date]}>
        {getJobDate(job?.job_start_date, job?.job_end_date)}
      </Text>
    </Pressable>
  );
};

export default JobItem;
