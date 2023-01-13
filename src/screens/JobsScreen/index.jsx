import { FlatList, RefreshControl, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../services/jobs";
import Loading from "../../components/common/Loading";
import JobItem from "../../components/common/JobItem";
import AddJobFAB from "../../components/common/AddJobFAB";

const JobsScreen = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);

  const fetchJobs = () => {
    setLoading(true);
    getAllJobs()
      .then(setJobs)
      .finally(() => setLoading(false));
  };

  const refreshJobs = () => {
    setRefreshLoading(true);
    getAllJobs()
      .then(setJobs)
      .finally(() => setRefreshLoading(false));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const listEmptyComponent = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          İlanda olan hiç iş bulamadık!
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1D212D", paddingBottom: 10 }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "#1D212D",
              justifyContent: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#292D32",
            }}
          >
            <Text
              style={{
                color: "white",
                marginLeft: 20,
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              İş Ara
            </Text>
          </View>
          <FlatList
            data={jobs || []}
            keyExtractor={(item) => `job/${item.id}`}
            initialNumToRender={5}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <JobItem job={item} />}
            style={{ flex: 1, paddingHorizontal: 15, paddingTop: 10 }}
            ListEmptyComponent={listEmptyComponent}
            refreshControl={
              <RefreshControl
                refreshing={refreshLoading}
                tintColor={"#DB4914"}
                onRefresh={refreshJobs}
              />
            }
          />
          <AddJobFAB />
        </>
      )}
    </View>
  );
};

export default JobsScreen;
