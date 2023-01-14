import React from "react";
import { getJobDate } from "../utils/getJobDate";
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import JobItem from '../components/common/JobItem';


describe('JobItem', () => {
    let job = {
        job_title: 'Test Job Title',
        job_owner: 'Test Job Owner',
        job_description: 'Test Job Description',
        job_start_date: '2023-01-01',
        job_end_date: '2023-01-31'
    }

    const navigation = {
        navigate: jest.fn()
    }

    it('should render correctly', () => {
        const { getByText } = render(
            <JobItem job={job} navigation={navigation} />)
        expect(getByText(job.job_title)).toBeTruthy();
        expect(getByText(job.job_owner)).toBeTruthy();
        expect(getByText(job.job_description)).toBeTruthy();
    });

    it('should navigate to "JobDetails" screen when pressed', async () => {
        const { getByTestId } = render(
            <JobItem job={job} navigation={navigation} />);
        const container = getByTestId("pressable-container")
        const navigationSpy = jest.spyOn(navigation, 'navigate');
        fireEvent.press(container)
        expect(navigationSpy).toHaveBeenCalledWith('JobDetails', { job });
    });

    it('should return the expected color for the job date based on its validity', () => {
        const { getByText } = render(
            <JobItem job={job} navigation={navigation} />);
        const jobDate = getByText(getJobDate(job.job_start_date, job.job_end_date));
        expect(jobDate.props.style[0].color).toBe("green");
    });
});