import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bible = () => {
  const [verse, setVerse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://uncovered-treasure-v1.p.rapidapi.com/random', {
          headers: {
            'x-rapidapi-host': 'uncovered-treasure-v1.p.rapidapi.com',
            'x-rapidapi-key': 'd8a72bc943msh856373546e54771p13392ajsn94f001861e8e'
          }
        });

        // Access the verse text from the first result in the response
        if (response.data && response.data.results && response.data.results.length > 0) {
          const firstResult = response.data.results[0];
          setVerse(firstResult.text);
        } else {
          setVerse('Verse not found');
        }
      } catch (error) {
        console.error(error);
        setVerse('Error fetching verse');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Random Bible Application:</h2>
      <p>{verse}</p>
    </div>
  );
}

export default Bible;