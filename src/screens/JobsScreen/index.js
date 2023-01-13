// components, styles
import { FlatList, RefreshControl, Text, View } from "react-native";
import Loading from "../../components/common/Loading";
import JobItem from "../../components/common/JobItem";
import AddJobFAB from "../../components/common/AddJobFAB";
import styles from "./styles";

// hooks
import { useEffect, useState } from "react";

// services
import { getAllJobs } from "../../services/jobs";

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
      <View style={styles.emptyListContainer}>
        <Text style={styles.emptyListText}>İlanda olan hiç iş bulamadık!</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>İş Ara</Text>
          </View>
          <FlatList
            data={jobs || []}
            keyExtractor={(item) => `job/${item.id}`}
            initialNumToRender={5}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <JobItem job={item} />}
            style={styles.flatListContainer}
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
