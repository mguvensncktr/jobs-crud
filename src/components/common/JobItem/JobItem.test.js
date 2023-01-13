import React from "react";
import { getJobDate } from "../../../utils/getJobDate";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import JobItem from '../JobItem';


describe('JobItem', () => {
    let job = {
        job_title: 'Test Job Title',
        job_owner: 'Test Job Owner',
        job_description: 'Test Job Description',
        job_start_date: '2023-01-01',
        job_end_date: '2023-01-31'
    }

    it('should render correctly', () => {
        const { getByText } = render(
            <NavigationContainer>
                <JobItem job={job} />
            </NavigationContainer>);
        expect(getByText(job.job_title)).toBeTruthy();
        expect(getByText(job.job_owner)).toBeTruthy();
        expect(getByText(job.job_description)).toBeTruthy();
    });

    it('should navigate to "JobDetails" screen when pressed', async () => {
        const { getByText } = render(
            <NavigationContainer>
                <JobItem job={job} />
            </NavigationContainer>);
        fireEvent.press(getByText(job.job_title))
        await waitFor(() => { expect("İş Hakkında").toBeTruthy(), 1000 });
    });

    it('should return the expected color for the job date based on its validity', () => {
        const { getByText } = render(
            <NavigationContainer>
                <JobItem job={job} />
            </NavigationContainer>);
        const jobDate = getByText(getJobDate(job.job_start_date, job.job_end_date));
        expect(jobDate.props.style[0].color).toBe("red");
    });
});