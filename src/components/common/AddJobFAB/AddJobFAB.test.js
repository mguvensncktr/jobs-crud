import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import AddJobFAB from '../AddJobFAB';
import { NavigationContainer } from '@react-navigation/native';

describe('AddJobFAB', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <AddJobFAB />
            </NavigationContainer>
        );
        expect(getByTestId('add-job-fab')).toBeTruthy();
    });

    it('should navigate to "AddJob" screen when pressed', async () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <AddJobFAB />
            </NavigationContainer>
        );
        const addJobFab = getByTestId('add-job-fab');
        fireEvent.press(addJobFab);
        await waitFor(() => { expect("Yeni iş ilanı oluştur").toBeTruthy(), 1000 });

    });
});