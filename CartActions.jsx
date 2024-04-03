import React, { useEffect } from 'react';
import axios from 'axios';

const GetProducts = () => {
  useEffect(() => {
    const fetchData = async () => {
      const encodedParams = new URLSearchParams();
      encodedParams.set('shopName', '<REQUIRED>');
      encodedParams.set('accessToken', '<REQUIRED>');

      const options = {
        method: 'POST',
        url: 'https://shopifyvolodimir-kudriachenkov1.p.rapidapi.com/getProducts',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'd8a72bc943msh856373546e54771p13392ajsn94f001861e8e',
          'X-RapidAPI-Host': 'Shopifyvolodimir-kudriachenkoV1.p.rapidapi.com'
        },
        data: encodedParams,
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>Fetching Products...</div>;
};

export default GetProducts;