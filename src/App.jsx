import { useEffect, useState } from 'react'
import { getFlag } from './api'
import './App.css'

const App = () => {
  const [flag, setFlag] = useState('')
  const [displayedFlag, setDisplayedFlag] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const produceFlag = async () => {
      const result = await getFlag();
      setFlag(result);
      setLoading(false);
    };

    produceFlag()
  }, []);

  useEffect(() => {
    if (!loading && flag) {
      let currentIndex = -1;

      const intervalId = setInterval(() => {
        setDisplayedFlag((prev) => prev + flag[currentIndex]);
        currentIndex++;

        if (currentIndex === flag.length -1) {
          clearInterval(intervalId);
        }
      }, 500); 

      return () => clearInterval(intervalId);
    }
  }, [loading, flag]);

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <ul>
          {displayedFlag.split('').map((char, i) => (
            <li key={i}>{char}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

/**
 * Script used to get URL from step 2:
 * let allChar = document.querySelectorAll("code > div > span > i.char");
 * let allCharArray = Array.from(allChar);
 * let valuesUrl = allCharArray.map((element) => {
    return element.getAttribute("value");
  });
 * valuesUrl.join("")
*/