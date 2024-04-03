import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prophecies = () => {
  const [verseData, setVerseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVerseOfTheDay = async () => {
      try {
        const response = await axios.get('https://uncovered-treasure-v1.p.rapidapi.com/today', {
          headers: {
            'x-rapidapi-host': 'uncovered-treasure-v1.p.rapidapi.com',
            'x-rapidapi-key': 'd8a72bc943msh856373546e54771p13392ajsn94f001861e8e'
          }
        });

        if (response.data && response.data.results && response.data.results.length > 0) {
          const verse = response.data.results[0];
          setVerseData(verse);
          setError(null);
        } else {
          throw new Error('Verse data not found');
        }
      } catch (error) {
        console.error('An error occurred while fetching the verse:', error);
        setError('Error fetching verse data');
      }
    };

    fetchVerseOfTheDay();
  }, []);

  return (
    <div>
      <h2>Verse of the Day:</h2>
      {error && <p>Error: {error}</p>}
      {verseData && (
        <div>
          
          <p>Context: {verseData.context}</p>
          <p>Scriptures: {verseData.scriptures.join(', ')}</p>
          <p>Text: {verseData.text}</p>
         
        </div>
      )}
    </div>
  );
}

export default Prophecies;