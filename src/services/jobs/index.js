import { HTTPClient } from '../../config/request';

export const getAllJobs = async () => {
    const { data: { jobs } } = await HTTPClient.get("/get_jobs.php");
    return jobs;
};