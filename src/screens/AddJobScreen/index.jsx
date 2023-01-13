import { useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";
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
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 10,
        }}
        onPress={handleGoBack}
      >
        <Ionicons name="arrow-back" size={26} color="#DB4914" />
        <Text style={{ color: "#DB4914", marginLeft: 5, fontSize: 20 }}>
          Geri Dön
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          marginTop: 30,
          marginLeft: 10,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Yeni iş ilanı oluştur
      </Text>
      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
          İş Ünvanı
        </Text>
        <TextInput
          value={jobTitle}
          onChangeText={setJobTitle}
          style={{
            backgroundColor: "white",
            height: 35,
            marginRight: 10,
            marginVertical: 10,
            borderRadius: 10,
            fontSize: 16,
            fontWeight: "600",
            paddingHorizontal: 10,
          }}
          autoCapitalize="words"
        />
      </View>
      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
          İş Sahibi
        </Text>
        <TextInput
          value={jobOwner}
          onChangeText={setJobOwner}
          style={{
            backgroundColor: "white",
            height: 35,
            marginRight: 10,
            marginVertical: 10,
            borderRadius: 10,
            fontSize: 16,
            fontWeight: "600",
            paddingHorizontal: 10,
          }}
          autoCapitalize="words"
        />
      </View>
      <View
        style={{
          marginLeft: 10,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
          İlan Başlangıç Tarihi
        </Text>
        <TouchableOpacity
          onPress={() => setOpenStartDateModal(true)}
          style={{ marginRight: 20 }}
        >
          <Text style={{ color: "#DB4914", fontSize: 18, fontWeight: "500" }}>
            Tarih Seç
          </Text>
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
      <Text
        style={{ color: "white", marginLeft: 10, marginTop: 5, fontSize: 16 }}
      >
        {jobStartDate}
      </Text>
      <View
        style={{
          marginLeft: 10,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
          İlan Bitiş Tarihi
        </Text>
        <TouchableOpacity
          onPress={() => setOpenEndDateModal(true)}
          style={{ marginRight: 20 }}
        >
          <Text style={{ color: "#DB4914", fontSize: 18, fontWeight: "500" }}>
            Tarih Seç
          </Text>
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
      <Text
        style={{ color: "white", marginLeft: 10, marginTop: 5, fontSize: 16 }}
      >
        {jobEndDate}
      </Text>
      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
          İş Açıklaması
        </Text>
        <TextInput
          value={jobDescription}
          onChangeText={setJobDescription}
          style={{
            backgroundColor: "white",
            minHeight: 120,
            marginRight: 10,
            marginVertical: 10,
            borderRadius: 10,
            fontSize: 16,
            fontWeight: "600",
            paddingHorizontal: 10,
          }}
          multiline
          maxLength={200}
          ref={descriptionRef}
          onBlur={() => descriptionRef.current?.blur()}
        />
        <Text
          style={{
            color: "#4E586E",
            position: "absolute",
            bottom: -10,
            right: 10,
          }}
        >
          {jobDescription.length} / 200
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderRadius: 20,
          backgroundColor: "#DB4914",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 20,
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
          İlanı Oluştur
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default AddJobScreen;
