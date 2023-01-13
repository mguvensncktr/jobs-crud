import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useRoute, useNavigation } from "@react-navigation/native";
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

  return (
    <ScrollView
      style={{
        backgroundColor: "#1D212D",
        paddingTop: getStatusBarHeight() + 10,
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, paddingBottom: 45 }}>
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
            Geri
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            İş Ünvanı:{" "}
            <Text style={{ color: "#DB4914" }}>{job?.job_title}</Text>
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            İş Hakkında
          </Text>
          <Text style={{ color: "white", fontSize: 16, marginTop: 10 }}>
            {job?.job_description}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            İşi Yayınlayan:{" "}
            <Text style={{ color: "#DB4914" }}>{job?.job_owner}</Text>
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {isStillAcceptsApplication ? (
            <>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
                Başvuru için son tarih:
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "500",
                  marginLeft: 5,
                }}
              >
                Başvuru kabul etmiyor
              </Text>
            </>
          ) : isNotAvailableYet ? (
            <>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
                Başvuru için son tarih:
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 5,
                }}
              >
                Henüz başlamadı!
              </Text>
            </>
          ) : (
            <>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
                Başvuru için son tarih:
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 5,
                }}
              >
                {new Date(job?.job_end_date.replace(/-/g, "/") + ":00")
                  .toLocaleDateString()
                  .slice(0, 10)
                  .replaceAll("-", "/") +
                  " " +
                  job?.job_end_date.slice(10, 16)}
              </Text>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default JobDetailScreen;
