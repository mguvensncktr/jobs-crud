import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../services/jobs";
import Loading from "../../components/common/Loading";
import JobItem from "../../components/common/JobItem";

const JobsScreen = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllJobs()
      .then(setJobs)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={{ flex: 1, backgroundColor: "white", paddingBottom: 10 }}>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "#1D212D",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                marginLeft: 20,
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Find a Job
            </Text>
          </View>
          <FlatList
            data={jobs || []}
            keyExtractor={(item) => `job/${item.id}`}
            initialNumToRender={5}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <JobItem job={item} />}
            style={{ flex: 1, paddingHorizontal: 15, paddingTop: 10 }}
          />
        </View>
      )}
    </>
  );
};

export default JobsScreen;
