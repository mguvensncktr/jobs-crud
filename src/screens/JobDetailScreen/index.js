// components, styles
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS } from "../../theme";

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
    new Date(job?.job_end_date.replaceAll("-", "/"))
      .toLocaleDateString()
      .slice(0, 10) +
    " " +
    job?.job_end_date.slice(10, 16);

  const headerWithTextField = (header, text) => {
    return (
      header.includes("Ünvan") ?
        (<View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>
            {header}{" "}
            <Text style={{ color: COLORS.secondary }}>{text}</Text>
          </Text>
        </View>) :
        header.includes("Hakkında") ?
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>{header}</Text>
            <Text style={styles.descriptionText}>{text}</Text>
          </View> :
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>
              {header}{" "}
              <Text style={{ color: COLORS.secondary }}>{text}</Text>
            </Text>
          </View>
    )
  }

  const lastDateForApplication = (header = "Başvuru için son tarih:") => {
    return (
      isStillAcceptsApplication ?
        <>
          <Text style={styles.lastApplicationDateText}>
            {header}
          </Text>
          <Text style={styles.noApplicationsText}>
            {"Başvuru kabul etmiyor"}
          </Text>
        </> : isNotAvailableYet ?
          <>
            <Text style={styles.lastApplicationDateText}>
              {header}
            </Text>
            <Text style={styles.noApplicationsText}>{"Henüz başlamadı!"}</Text>
          </> :
          <>
            <Text style={styles.lastApplicationDateText}>
              {header}
            </Text>
            <Text style={styles.noApplicationsText}>
              {lastApplicationDate}
            </Text>
          </>
    )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.goBackButtonContainer}
          onPress={handleGoBack}
        >
          <Ionicons name="arrow-back" size={26} color={COLORS.secondary} />
          <Text style={styles.goBackText}>Geri</Text>
        </TouchableOpacity>
        {headerWithTextField("İş Ünvanı:", job?.job_title)}
        {headerWithTextField("İş Hakkında", job?.job_description)}
        {headerWithTextField("İşi Yayınlayan:", job?.job_owner)}
        <View style={styles.applicationDateContainer}>
          {lastDateForApplication()}
        </View>
      </View>
    </ScrollView>
  );
};

export default JobDetailScreen;
