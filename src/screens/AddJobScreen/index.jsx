// components, styles
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styles from "./styles";

// hooks
import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// services
import { addNewJob } from "../../services/jobs";

const AddJobScreen = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobOwner, setJobOwner] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [openStartDateModal, setOpenStartDateModal] = useState(false);
  const [openEndDateModal, setOpenEndDateModal] = useState(false);

  const navigation = useNavigation();
  const descriptionRef = useRef();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    const emptyFields = [];
    jobTitle ? null : emptyFields.push("İş Ünvanı");
    jobOwner ? null : emptyFields.push("İş Sahibi");
    jobStartDate ? null : emptyFields.push("İlan Başlangıç Tarihi");
    jobEndDate ? null : emptyFields.push("İlan Bitiş Tarihi");
    jobDescription ? null : emptyFields.push("İş Açıklaması");

    if (emptyFields.length > 0) {
      Alert.alert(
        "Hata!",
        `Bu alanlar boş bırakılamaz! Lütfen hepsini doldurun: ${emptyFields.join(
          ", "
        )}`
      );
    } else {
      try {
        const response = await addNewJob(
          jobTitle,
          jobOwner,
          jobStartDate,
          jobEndDate,
          jobDescription
        );
        if (response.success === 0) {
          Alert.alert("Başarılı!", "İlan başarılı şekilde paylaşıldı.", [
            {
              text: "Tamam",
              onPress: () => navigation.goBack(),
            },
          ]);
        }
      } catch (error) {
        Alert.alert("Hata!", error.message);
      }
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: "#1D212D",
        paddingTop: getStatusBarHeight() + 10,
      }}
      contentContainerStyle={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.goBackTouchable} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={26} color="#DB4914" />
        <Text style={styles.goBackText}>Geri Dön</Text>
      </TouchableOpacity>
      <Text style={styles.newJobPostHeader}>Yeni iş ilanı oluştur</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.titleHeader}>İş Ünvanı</Text>
        <TextInput
          value={jobTitle}
          onChangeText={setJobTitle}
          style={styles.titleInput}
          autoCapitalize="words"
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.titleHeader}>İş Sahibi</Text>
        <TextInput
          value={jobOwner}
          onChangeText={setJobOwner}
          style={styles.titleInput}
          autoCapitalize="words"
        />
      </View>
      <View style={styles.jobStartDateContainer}>
        <Text style={styles.titleHeader}>İlan Başlangıç Tarihi</Text>
        <TouchableOpacity
          onPress={() => setOpenStartDateModal(true)}
          style={{ marginRight: 20 }}
        >
          <Text style={styles.pickDateText}>Tarih Seç</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={openStartDateModal}
          mode="date"
          onConfirm={(date) => {
            setJobStartDate(
              date.toJSON().slice(0, 10).replaceAll("/", "-") +
                " " +
                new Date().toTimeString().slice(0, 5)
            ),
              setOpenStartDateModal(false);
          }}
          onCancel={() => setOpenStartDateModal(false)}
        />
      </View>
      <Text style={styles.startAndEndDateText}>{jobStartDate}</Text>
      <View style={styles.jobStartDateContainer}>
        <Text style={styles.titleHeader}>İlan Bitiş Tarihi</Text>
        <TouchableOpacity
          onPress={() => setOpenEndDateModal(true)}
          style={{ marginRight: 20 }}
        >
          <Text style={styles.pickDateText}>Tarih Seç</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={openEndDateModal}
          mode="date"
          onConfirm={(date) => {
            setJobEndDate(
              date.toJSON().slice(0, 10).replaceAll("/", "-") +
                " " +
                new Date().toTimeString().slice(0, 5)
            ),
              setOpenEndDateModal(false);
          }}
          onCancel={() => setOpenEndDateModal(false)}
        />
      </View>
      <Text style={styles.startAndEndDateText}>{jobEndDate}</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.titleHeader}>İş Açıklaması</Text>
        <TextInput
          value={jobDescription}
          onChangeText={setJobDescription}
          style={styles.descriptionInput}
          multiline
          maxLength={200}
          ref={descriptionRef}
          onBlur={() => descriptionRef.current?.blur()}
        />
        <Text style={styles.remainingCharactersText}>
          {jobDescription.length} / 200
        </Text>
      </View>
      <TouchableOpacity
        style={styles.submitButtonContainer}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>İlanı Oluştur</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default AddJobScreen;
