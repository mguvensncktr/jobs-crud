import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import AddJobFAB from '../components/common/AddJobFAB';

describe('AddJobFAB', () => {

    const navigation = {
        navigate: jest.fn()
    }

    it('should render correctly', () => {
        const { getByTestId } = render(
            <AddJobFAB navigation={navigation} />
        );
        expect(getByTestId('add-job-fab')).toBeTruthy();
    });

    it('should navigate to "AddJob" screen when pressed', async () => {
        const { getByTestId } = render(
            <AddJobFAB navigation={navigation} />
        );
        const container = getByTestId('add-job-fab');
        const navigationSpy = jest.spyOn(navigation, 'navigate');
        fireEvent.press(container);
        expect(navigationSpy).toHaveBeenCalledWith("AddJob");

    });
});