import React from "react";
import { getJobDate } from "../../../utils/getJobDate";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from 'react-native-testing-library';
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

    it('should navigate to "JobDetails" screen when pressed', () => {
        const navigation = { navigate: jest.fn() };
        const { getByText } = render(<JobItem job={job} navigation={navigation} />);
        fireEvent.press(getByText(job.job_title))
        expect(navigation.navigate).toHaveBeenCalledWith('JobDetails', { job });
    });

    it('should return the expected color for the job date based on its validity', () => {
        const { getByText } = render(<JobItem job={job} />);
        const jobDate = getByText(getJobDate(job.job_start_date, job.job_end_date));
        expect(jobDate.props.style[0].color).toBe("red");
    });
});