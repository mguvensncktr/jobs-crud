import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
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

    it('should navigate to "AddJob" screen when pressed', () => {
        const navigation = { navigate: jest.fn() };
        const { getByTestId } = render(
            <AddJobFAB navigation={navigation} />
        );
        const addJobFab = getByTestId('add-job-fab');
        fireEvent.press(addJobFab);
        expect(navigation.navigate).toHaveBeenCalledWith('AddJob');
    });
});