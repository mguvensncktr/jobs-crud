// components, styles
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

// hooks
import { useRoute, useNavigation } from "@react-navigation/native";

// helper functions
import { getJobDate } from "../../utils/getJobDate";

const JobDetailScreen = () => {
  const {
    params: { job },
  } = useRoute();

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const isStillAcceptsApplication = getJobDate(
    job?.job_start_date,
    job?.job_end_date
  ).includes("kaldırıl");

  const isNotAvailableYet = getJobDate(
    job?.job_start_date,
    job?.job_end_date
  ).includes("yayınlanacak");

  const lastApplicationDate =
    new Date(job?.job_end_date.replace(/-/g, "/") + ":00")
      .toLocaleDateString()
      .slice(0, 10)
      .replaceAll("-", "/") +
    " " +
    job?.job_end_date.slice(10, 16);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.goBackButtonContainer}
          onPress={handleGoBack}
        >
          <Ionicons name="arrow-back" size={26} color="#DB4914" />
          <Text style={styles.goBackText}>Geri</Text>
        </TouchableOpacity>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>
            İş Ünvanı:{" "}
            <Text style={{ color: "#DB4914" }}>{job?.job_title}</Text>
          </Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>İş Hakkında</Text>
          <Text style={styles.descriptionText}>{job?.job_description}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>
            İşi Yayınlayan:{" "}
            <Text style={{ color: "#DB4914" }}>{job?.job_owner}</Text>
          </Text>
        </View>
        <View style={styles.applicationDateContainer}>
          {isStillAcceptsApplication ? (
            <>
              <Text style={styles.lastApplicationDateText}>
                Başvuru için son tarih:
              </Text>
              <Text style={styles.noApplicationsText}>
                Başvuru kabul etmiyor
              </Text>
            </>
          ) : isNotAvailableYet ? (
            <>
              <Text style={styles.lastApplicationDateText}>
                Başvuru için son tarih:
              </Text>
              <Text style={styles.noApplicationsText}>Henüz başlamadı!</Text>
            </>
          ) : (
            <>
              <Text style={styles.lastApplicationDateText}>
                Başvuru için son tarih:
              </Text>
              <Text style={styles.noApplicationsText}>
                {lastApplicationDate}
              </Text>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default JobDetailScreen;
