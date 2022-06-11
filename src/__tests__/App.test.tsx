import { render } from '@testing-library/react';
import App from '../App';

// jest.mock('src/utilities/environment');

describe('App tests', () => {
  it('should render app', () => {
    render(<App />);
  });
});
