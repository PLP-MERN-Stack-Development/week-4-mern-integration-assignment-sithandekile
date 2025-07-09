import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios({
        url,
        method: options.method || 'GET',
        data: options.body
      });
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) fetchData();
  }, [url]);

  return { 
    data, 
    loading, 
    error,
    refetch: fetchData
  };
};

export default useApi;