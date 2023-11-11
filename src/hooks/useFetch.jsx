import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [fetchedData, setFetchedData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await fetch(url);
            const data = await response.json();
    
            setFetchedData(data);
          } catch (error) {
            setError(error);
          }finally{
            setLoading(false)
          }
        };
        
        fetchData();
      }, [url]);

      return {fetchedData, error, loading}
} 

export default useFetch;