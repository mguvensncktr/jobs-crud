import { FlatList, Text } from "react-native";
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
        <FlatList
          data={jobs || []}
          keyExtractor={(item) => `job/${item.id}`}
          initialNumToRender={5}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <JobItem job={item} />}
          style={{ flex: 1, paddingHorizontal: 15, marginVertical: 10 }}
        />
      )}
    </>
  );
};

export default JobsScreen;
