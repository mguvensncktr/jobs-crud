import { HTTPClient } from '../../config/request';

export const getAllJobs = async () => {
    const { data: { jobs } } = await HTTPClient.get("/get_jobs.php");
    return jobs;
};

export const addNewJob = async (title, owner, startDate, endDate, description) => {
    const { data } = await HTTPClient.post("/insert_job.php", {
        job_title: title,
        job_owner: owner,
        job_start_date: startDate,
        job_end_date: endDate,
        job_description: description
    });
    return data;
}