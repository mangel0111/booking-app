import { fireEvent, render, waitFor } from '@testing-library/react';
import { FetchMock } from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';
import {
  mockDataWith100images,
  mockDataWith3Images,
} from 'src/test/__mocks__/dataServerMock';
import App from '../App';

const fetchMock = fetch as FetchMock;

describe('App tests', () => {
  describe('Carrousel tests', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
      fetchMock.mockResponseOnce(
        JSON.stringify({
          id: '1',
          imageUrls: mockDataWith3Images,
        })
      );
    });
    it('should visualize the carrousel correctly', async () => {
      const appRendered = render(<App />);

      const detailsView = appRendered.getByTestId('details-container');

      expect(detailsView).toBeInTheDocument();
      await waitFor(() => {
        expect(
          appRendered.getByTestId('carrousel-container')
        ).toBeInTheDocument();
        expect(appRendered.getByTestId('carrousel-item-1')).toBeInTheDocument();
        expect(appRendered.getByTestId('carrousel-item-2')).toBeVisible();
      });
    });
    it('should visualize the current picture displayed when user moves', async () => {
      const appRendered = render(<App />);
      await waitFor(() => {
        expect(
          appRendered.getByTestId('carrousel-container')
        ).toBeInTheDocument();
        expect(
          appRendered.getByTestId('carrousel-position-info')
        ).toHaveTextContent('1/3');
      });
      const rigthButton = appRendered.getByTestId('carrousel-button-right');

      fireEvent.click(rigthButton);

      expect(
        appRendered.getByTestId('carrousel-position-info')
      ).toHaveTextContent('2/3');
    });
    it('should disable left button when the first picture is displayed', async () => {
      const appRendered = render(<App />);
      await waitFor(() => {
        expect(
          appRendered.getByTestId('carrousel-container')
        ).toBeInTheDocument();
        expect(
          appRendered.getByTestId('carrousel-position-info')
        ).toHaveTextContent('1/3');
      });
      const leftButton = appRendered.getByTestId('carrousel-button-left');

      fireEvent.click(leftButton);

      expect(leftButton).toBeDisabled();
      expect(
        appRendered.getByTestId('carrousel-position-info')
      ).toHaveTextContent('1/3');
    });
    it('should disable right button when the last picture is displayed', async () => {
      const appRendered = render(<App />);
      await waitFor(() => {
        expect(
          appRendered.getByTestId('carrousel-container')
        ).toBeInTheDocument();
        expect(
          appRendered.getByTestId('carrousel-position-info')
        ).toHaveTextContent('1/3');
      });
      const rigthButton = appRendered.getByTestId('carrousel-button-right');

      fireEvent.click(rigthButton);
      fireEvent.click(rigthButton);
      fireEvent.click(rigthButton);

      expect(rigthButton).toBeDisabled();
      expect(
        appRendered.getByTestId('carrousel-position-info')
      ).toHaveTextContent('3/3');
    });
    it('should only display 30 images', async () => {
      fetchMock.resetMocks();
      fetchMock.mockResponse(
        JSON.stringify({
          id: '1',
          imageUrls: mockDataWith100images,
        })
      );

      const appRendered = render(<App />);

      await waitFor(() => {
        expect(
          appRendered.getByTestId('carrousel-container')
        ).toBeInTheDocument();
        expect(
          appRendered.getByTestId('carrousel-position-info')
        ).toHaveTextContent('1/30');
      });
    });
  });
});
