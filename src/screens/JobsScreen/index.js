// components, styles
import { FlatList, RefreshControl, Text, TextInput, View } from "react-native";
import Loading from "../../components/common/Loading";
import JobItem from "../../components/common/JobItem";
import AddJobFAB from "../../components/common/AddJobFAB";
import styles from "./styles";
import { COLORS } from "../../theme";

// hooks
import { useEffect, useState } from "react";

// services
import { getAllJobs } from "../../services/jobs";

const JobsScreen = () => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(false);
	const [refreshLoading, setRefreshLoading] = useState(false);
	const [search, setSearch] = useState("");

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

	const handleSearch = (value) => {
		setSearch(value);
	}

	const filteredJobs = jobs.filter(job =>
		job.job_title.toLowerCase().includes(search.toLowerCase()) ||
		job.job_owner.toLowerCase().includes(search.toLowerCase())
	);

	const listEmptyComponent = () => {
		return (
			search.length > 0 && filteredJobs.length === 0 ?
				<View style={styles.emptyListContainer}>
					<Text style={styles.emptyListText}>
						Arama kriterlerine uygun iş ilanı bulamadık!
					</Text>
				</View>
				:
				<View style={styles.emptyListContainer}>
					<Text style={styles.emptyListText}>
						İlanda olan hiç iş bulamadık!
					</Text>
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
						<TextInput
							style={styles.searchInput}
							value={search}
							onChangeText={handleSearch}
							placeholder="Ünvan ve şirket ara..."
						/>
					</View>
					<FlatList
						data={filteredJobs || []}
						keyExtractor={(item) => `job/${item.id}`}
						initialNumToRender={5}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => <JobItem job={item} />}
						style={styles.flatListContainer}
						ListEmptyComponent={listEmptyComponent}
						refreshControl={
							<RefreshControl
								refreshing={refreshLoading}
								tintColor={COLORS.secondary}
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
