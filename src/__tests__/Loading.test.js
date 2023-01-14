import React from 'react';
import { render } from 'react-native-testing-library';
import Loading from '../components/common/Loading';
import { NavigationContainer } from '@react-navigation/native';


describe('Loading', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <Loading />
            </NavigationContainer>
        );
        expect(getByTestId('loading')).toBeTruthy();
    });
});