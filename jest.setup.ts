jest.mock('src/utilities/environment');

import jestFetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

jestFetchMock.enableMocks();

export default {};
