// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useApi = (url, options = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     const controller = new AbortController();
//     try {
//       setLoading(true);
//       const response = await axios({
//         url,
//         method: options.method ?? 'GET',
//         data: options.body,
//         params: options.params,
//         signal: controller.signal,
//       });
//       setData(response.data);
//     } catch (err) {
//       if (axios.isCancel(err)) {
//         console.log('Request canceled:', err.message);
//       } else {
//         setError(err.response?.data?.message || err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//     return () => controller.abort(); 
//   };

//   useEffect(() => {
//     if (url) fetchData();
//   }, [url, JSON.stringify(options.params)]); 

//   return { 
//     data, 
//     loading, 
//     error,
//     refetch: fetchData,
//   };
// };

// export default useApi;
