import Loading from '../components/common/Loading';
import { render } from '@testing-library/react-native';
import { COLORS } from '../theme';

describe('Loading', () => {
    it('should render a loading indicator', () => {
        const { getByTestId } = render(<Loading />);
        expect(getByTestId('loading')).toBeTruthy();
    });

    it('should include an activity indicator', () => {
        const { getByTestId } = render(<Loading />);
        expect(getByTestId('activity-indicator')).toBeTruthy();
    });

    it('should have the correct color', () => {
        const { getByTestId } = render(<Loading />);
        expect(getByTestId("activity-indicator").props.color).toBe(COLORS.secondary);
    });
});