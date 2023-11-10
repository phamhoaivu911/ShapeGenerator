import {renderHook} from '@testing-library/react-hooks';

import useRandomPattern from '../src/hooks/useRandomPattern';

// Mock the fetch function
jest.mock('node-fetch');

describe('useRandomPattern', () => {
  it('fetches data successfully and returns it', async () => {
    // Set up the mock response
    const mockData = [{imageUrl: 'https://pattern.com/image.png'}];
    const mockResponse = {json: jest.fn().mockResolvedValue(mockData)};
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    // Render the hook
    const {result, waitForNextUpdate} = renderHook(() => useRandomPattern());

    // Wait for the hook to finish its initial update
    await waitForNextUpdate({timeout: 3000});

    // Assert that the data is set correctly
    expect(result.current[0]).toEqual('https://pattern.com/image.png');
  });

  it('handles errors and returns local pattern', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(new Error('Fake Error')),
    });

    const {result, waitForNextUpdate} = renderHook(() => useRandomPattern());

    await waitForNextUpdate({timeout: 3000});

    expect(result.current[0]).toBeDefined();
  });
});
