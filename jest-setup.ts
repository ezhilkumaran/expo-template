import '@testing-library/react-native/extend-expect';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// It is recommended to use userEvent with fake timers
jest.useFakeTimers();

// Mock the router
jest.mock('expo-router', () => ({
    router: {
        push: jest.fn(),
        navigate: jest.fn(),
    },
    useLocalSearchParams: jest.fn(),
}));

// Mock expo image to prevent Unexpected ref object warning in tests
jest.mock('expo-image', () => {
    const actualExpoImage = jest.requireActual('expo-image');
    const { Image } = jest.requireActual('react-native');

    return { ...actualExpoImage, Image };
});

// Mock KeyboardAwareScrollView to prevent error in ScrollView in tests
jest.mock('react-native-keyboard-aware-scroll-view', () => {
    const KeyboardAwareScrollView = require('react-native').ScrollView;
    return { KeyboardAwareScrollView };
});

// Mock safe area context
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
