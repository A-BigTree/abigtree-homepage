import { useState, useEffect, useCallback } from 'react';
import type { PersonalData } from '../types';

type DataSource = 'local' | 'remote';

interface UseDataLoaderReturn {
  data: PersonalData | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

const DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE as DataSource || 'local';
const REMOTE_DATA_URL = import.meta.env.VITE_REMOTE_DATA_URL || '';
const REFRESH_INTERVAL = Number(import.meta.env.VITE_DATA_REFRESH_INTERVAL) || 300000;

export const useDataLoader = (): UseDataLoaderReturn => {
  const [data, setData] = useState<PersonalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let responseData: PersonalData;

      if (DATA_SOURCE === 'remote' && REMOTE_DATA_URL) {
        const response = await fetch(REMOTE_DATA_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        responseData = await response.json();
      } else {
        const response = await fetch('/config.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        responseData = await response.json();
      }

      setData(responseData);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load data');
      console.error('Error loading data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (REFRESH_INTERVAL > 0) {
      const interval = setInterval(fetchData, REFRESH_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData
  };
};
