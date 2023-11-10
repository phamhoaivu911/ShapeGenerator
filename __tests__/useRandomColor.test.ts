import {renderHook} from '@testing-library/react-hooks';

import useRandomColor from '../src/hooks/useRandomColor';

// Mock the fetch function
jest.mock('node-fetch');

describe('useRandomColor', () => {
  it('fetches data successfully and returns it', async () => {
    // Set up the mock response
    const mockData = [{hex: '123456'}];
    const mockResponse = {json: jest.fn().mockResolvedValue(mockData)};
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    // Render the hook
    const {result, waitForNextUpdate} = renderHook(() => useRandomColor());

    // Wait for the hook to finish its initial update
    await waitForNextUpdate({timeout: 3000});

    // Assert that the data is set correctly
    expect(result.current[0]).toEqual('#123456');
  });

  it('handles errors and returns random color from code', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(new Error('Fake Error')),
    });

    const {result, waitForNextUpdate} = renderHook(() => useRandomColor());

    await waitForNextUpdate({timeout: 3000});

    expect(result.current[0]).toEqual(expect.stringContaining('#'));
  });
});
